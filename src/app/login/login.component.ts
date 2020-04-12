import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    submitted = false;
    loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
   this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
  // alert("test");
        this.submitted = true;
      

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.auth.sendToken(this.loginForm.value.email)
        this.router.navigate(['/home']);

        // alert('SUCCESS!! :-)')
        this.loading = true;
        
    }
     

}
