import { Entity } from "../../mapping/entity";

export interface Paginator<T extends Entity> {

    total: number,
    totalPerPage: number,
    currentPage: number,
    firstPage: number,
    lastPage: number,
    data: T[]

}
