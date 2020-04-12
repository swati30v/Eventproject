import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})
export class SignupComponent implements OnInit {
 registerForm: FormGroup;
    submitted = false;
    loading = false;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
   // getter for easy access to form fields
    get f() { return this.registerForm.controls; }

onSubmit() {
  // alert("test");
        this.submitted = true;
      

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.router.navigate(['/login']);

        // alert('SUCCESS!! :-)')
        this.loading = true;
        
    }

}
