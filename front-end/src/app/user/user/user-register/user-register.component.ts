import { Component, OnInit } from '@angular/core';
import { GenericRegisterComponent } from '../../../util/crud/generic-register-component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { UserDao } from '../user.dao';
import { User } from '../user.model';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent extends GenericRegisterComponent<User> {

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _dao: UserDao,
    public dialog: MatDialog,
  ) {
    super();
  }

  getDao(): UserDao {
    return this._dao;
  }

  getPathId(): number {
    return null;
  }

  afterCreated(): void {
    this._router.navigate(['/user/list']);
  }

  berforeCreat(): void { }

  createForm(): FormGroup {
    return this._formBuilder.group({
      id: this._formBuilder.control('', []),
      user: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [Validators.required]),
    });
  }

  init(): void {
  }

}