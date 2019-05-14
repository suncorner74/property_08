import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterService,
              private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber:['', [Validators.required, Validators.minLength(10),  
                    Validators.pattern('^[0-9]*$')]],
      role:['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
    this.submitted = true;
console.log(this.registerForm);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.registerService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
               // this.alertService.success('Registration successful', true);
                this.router.navigate(['']);
            },
            error => {
                console.log(error);
               // this.alertService.error(error);
                this.loading = false;
            });
}

}
