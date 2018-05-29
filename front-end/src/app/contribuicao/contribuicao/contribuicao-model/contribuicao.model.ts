import { Entity } from "../../../util/mapping/entity";


export interface Contribuicao extends Entity {
    tipo?: string,
    nome?: string,
    active?: boolean
}