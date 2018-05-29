import { Entity } from "../../util/mapping/entity";

export interface User extends Entity{
    name?: string;
    password: string;
}