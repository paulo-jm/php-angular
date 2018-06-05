import { Entity } from '../mapping/entity';
import { GenericDataSourceModule } from '../collection/generic-data-source.module';
import { GenericDao } from '../dao/generic-dao';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { GenericCrudComponent } from './generic-grud-component';
import { FormGroup } from '@angular/forms';
import { OnInit } from '@angular/core';

export abstract class GenericRegisterComponent<T extends Entity>
    extends GenericCrudComponent<T> implements OnInit {

    public form: FormGroup;

    public loading: boolean;

    create(entity: T) {
        this.berforeCreat();

        if (this.getPathId()) {
            this.getDao().update(this.getPathId(), entity).subscribe(
                (result) => {
                    this.form = this.createForm();
                    this.form.setValue(result);
                    this.afterCreated();
                }
            );
        } else {
            this.getDao().create(entity).subscribe(
                (result) => {
                    this.form = this.createForm();
                    console.log(result)
                    this.form.setValue(result);
                    this.afterCreated();
                }
            );
        }

    }

    findById(id: number): Observable<T> {
        return this.getDao().findById(id);
    }

    abstract getPathId(): number;

    abstract init(): void;

    abstract afterCreated(): void;

    abstract berforeCreat(): void;

    abstract createForm(): FormGroup;

    public populateForm(value: T): void {
        if (value) {
            this.form.setValue(value);
        }
    }

    ngOnInit(): void {

        const id: number = this.getPathId();

        this.form = this.createForm();
        this.handlerLoading();
        if (id) {
            this.findById(id).subscribe(
                (result) => {
                    this.populateForm(result);
                }
            );
        } else {
            this.populateForm(null);
        }

        this.init();
    }

    handlerLoading(): void {
        this.getDao().loading.subscribe((result) => this.loading = result);
      }

}
