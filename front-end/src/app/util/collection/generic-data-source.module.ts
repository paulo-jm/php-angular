import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';

import {
    BehaviorSubject,
    combineLatest,
    merge,
    Observable,
    of as observableOf,
    Subscription
} from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Entity } from '../mapping/entity';
import { GenericDao } from '../dao/generic-dao';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { Paginator } from '../paginator/paginator-model/paginator.model';

export class GenericDataSourceModule<T extends Entity> extends DataSource<T> {

    /** Stream that emits when a new data array is set on the data source. */
    private readonly _data: BehaviorSubject<T[]>;

    /** Stream emitting render data to the table (depends on ordered data changes). */
    private readonly _renderData = new BehaviorSubject<T[]>([]);

    /** Stream that emits when a new filter string is set on the data source. */
    private readonly _filter = new BehaviorSubject<string>('');

    get loading() {
        console.log(this._dao.loading);
        return this._dao.loading;
    }

    /**
     * The filtered set of data that has been matched by the filter string, or all the data if there
     * is no filter. Useful for knowing the set of data the table represents.
     * For example, a 'selectAll()' function would likely want to select the set of filtered data
     * shown to the user rather than all the data.
     */
    filteredData: T[];

    /** Array of data that should be rendered by the table, where each object represents one row. */
    get data() { return this._data.value; }
    set data(data: T[]) { this._data.next(data); }

    /**
     * Filter term that should be used to filter out objects from the data array. To override how
     * data objects match to this filter string, provide a custom function for filterPredicate.
     */
    get filter(): string { return this._filter.value; }
    set filter(filter: string) { this._filter.next(filter); }

    /**
     * Instance of the MatSort directive used by the table to control its sorting. Sort changes
     * emitted by the MatSort will trigger an update to the table's rendered data.
     */
    get sort(): MatSort | null { return this._sort; }
    set sort(sort: MatSort | null) {
        this._sort = sort;
    }
    private _sort: MatSort | null;

    /**
     * Instance of the MatPaginator component used by the table to control what page of the data is
     * displayed. Page changes emitted by the MatPaginator will trigger an update to the
     * table's rendered data.
     *
     * Note that the data source uses the paginator's properties to calculate which page of data
     * should be displayed. If the paginator receives its properties as template inputs,
     * e.g. `[pageLength]=100` or `[pageIndex]=1`, then be sure that the paginator's view has been
     * initialized before assigning it to this data source.
     */
    get paginator(): MatPaginator | null { return this._paginator; }
    set paginator(paginator: MatPaginator | null) {
        this._paginator = paginator;
    }
    private _paginator: MatPaginator | null;

    constructor(private _dao: GenericDao<T>, paginator: MatPaginator, sort: MatSort) {
        super();
        this._data = new BehaviorSubject<T[]>([]);
        this.paginator = paginator;
        this.sort = sort;

        this._updateChangeSubscription();
    }

    /**
     * Subscribe to changes that should trigger an update to the table's rendered rows. When the
     * changes occur, process the current state of the filter, sort, and pagination along with
     * the provided base data and send it to the table for rendering.
     */
    _updateChangeSubscription() {
        // Sorting and/or pagination should be watched if MatSort and/or MatPaginator are provided.
        // The events should emit whenever the component emits a change or initializes, or if no
        // component is provided, a stream with just a null event should be provided.
        // The `sortChange` and `pageChange` acts as a signal to the combineLatests below so that the
        // pipeline can progress to the next step. Note that the value from these streams are not used,
        // they purely act as a signal to progress in the pipeline.
        const sortChange: Observable<Sort | null> = this._sort ?
            merge<Sort>(this._sort.sortChange, this._sort.initialized) :
            observableOf(null);
        const pageChange: Observable<PageEvent | null> = this._paginator ?
            merge<PageEvent>(this._paginator.page, this._paginator.initialized) :
            observableOf(null);

        merge(this._filter, sortChange, pageChange)
            .pipe(
                tap(() => this._paginate())
            )
            .subscribe();
    }

    /**
      * Returns a filtered data array where each filter object contains the filter string within
      * the result of the filterTermAccessor function. If no filter is set, returns the data array
      * as provided.
      */
    _paginate() {

        return this._dao.paginate(this.filter, this._sort.active, this._sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
            .subscribe(result => {
                this._renderData.next(result.data);
                this._updatePaginator(result);

            });
    }

    /**
     * Updates the paginator to reflect the length of the filtered data, and makes sure that the page
     * index does not exceed the paginator's last page. Values are changed in a resolved promise to
     * guard against making property changes within a round of change detection.
     */
    _updatePaginator(result: Paginator<T>) {
        Promise.resolve().then(() => {
            if (!this.paginator) { return; }

            this.paginator.length = result.total;

            // If the page index is set beyond the page, reduce it to the last page.
            if (this.paginator.pageIndex > 0) {
                this.paginator.pageIndex = result.currentPage;
            }
        });
    }

    /**
     * Used by the MatTable. Called when it connects to the data source.
     * @docs-private
     */
    connect() { return this._renderData; }

    /**
     * Used by the MatTable. Called when it is destroyed. No-op.
     * @docs-private
     */
    disconnect() {
        this._data.complete();
    }

}
