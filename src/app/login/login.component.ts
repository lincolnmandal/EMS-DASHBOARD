import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { trigger, transition, animate, style, state } from "@angular/animations";
import { routerTransition } from '../router.animations';
import { AuthService } from '../shared/auth.service';


@Component({
  templateUrl: 'login.component.html',
  styles: [`
    .form-control-password {
      position: relative;
      top: -29px;
      left: -4px;
      cursor: pointer;
  },
  `],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  password: boolean = false;
  loginForm: FormGroup;
  islogoutSuceeded: boolean;
  fullImage: string;


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.fullImage = '../assets/img/usericon.png';
  }

  ngOnInit() {
    this.authService.onLoginSuccess.next();
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    });
  }

  togglePassword() {
    this.password = !this.password;
  }

  login() {

    let elements = this.authService.login(this.loginForm.value.email, this.loginForm.value.password);

    if (!elements) return;
    this.authService.onLoginSuccess.next('yay i am admin now')
    this.router.navigate(['/customer']);
    console.log('loggedin Successfully!!');

    // let snackBarRef = this.snackBar.open('loggedin Successfully!',
    //   'Got it!', {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right',
    //   });
  }
}


