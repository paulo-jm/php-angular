import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private _router: Router,
    private _activateRouter: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this._formBuilder.group({
      user: this._formBuilder.control('', [Validators.required]),
      password: this._formBuilder.control('', [Validators.required])
    });
  }

  entrar(){
    this._router.navigate(['/']);
  }

  ngOnInit() {
  }

}
