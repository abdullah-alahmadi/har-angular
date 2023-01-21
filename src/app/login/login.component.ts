import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup
  constructor(private fb:FormBuilder, private auth:AngularFireAuth, private router:Router, private alert:MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLogin() {
    const {email, password} = this.loginForm.value
    this.auth.signInWithEmailAndPassword(email, password)
      .then(result => {
      this.router.navigateByUrl('dashboard')
    }).catch(
      error => {
        this.alert.open(error.message, 'close', {
          horizontalPosition: "center",
          verticalPosition: "top"
        })
      }
    )

  }
}
