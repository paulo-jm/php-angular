import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { GenericDao } from "../../util/dao/generic-dao";
import { User } from "./user.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class UserDao extends GenericDao<User> { 

  constructor(protected _http: HttpClient) {
    super(environment.endopoint.user.path, _http);
  }

}