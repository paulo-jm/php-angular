import { Entity } from "../../../util/mapping/entity";
import { Contribuicao } from "../../contribuicao/contribuicao-model/contribuicao.model";


export interface Apadrinhado extends Entity {
    nome?: string,
    contribuicao?: Contribuicao,
}