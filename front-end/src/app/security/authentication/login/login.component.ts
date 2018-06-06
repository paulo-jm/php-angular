import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication-service/authentication.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;

  public isEntering = false;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _authService: AuthenticationService
  ) {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      user: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [Validators.required])
    });
  }

  entrar() {
    this.isEntering = true;
    this._authService.login(this.formGroup.controls.user.value, this.formGroup.controls.password.value)
      .pipe(
        finalize(() => { this.isEntering = false; })
      )
      .subscribe((response) => {
        this._router.navigate(['/doador']);
      })

  }

  ngOnInit() {

    this._authService.IsLogged.subscribe((result) => {
      if (result) {
        this._router.navigate(['/doador']);
      }
    });

  }

}
