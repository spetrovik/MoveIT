import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../_services/account.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();
  registerForm: FormGroup;

  constructor(private accountService: AccountService, 
    private router: Router) { }

  ngOnInit(): void {
this.initializeForm();
  }
initializeForm(){
  this.registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')])
  })
  this.registerForm.controls.password.valueChanges.subscribe(() => 
  this.registerForm.controls.confirmPassword.updateValueAndValidity())
}
 matchValues(matchTo: string) : ValidatorFn
 {
   return (control: AbstractControl) => { 
    return control?.value === control?.parent?.controls[matchTo].value
     ? null : 
    {isMatching: true}
   }
 }
  register(){

   this.accountService.register(this.registerForm.value).subscribe(response => {
     this.router.navigateByUrl('/offers');
    this.cancel();
   }, error => {
    console.log(error);
   })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }

}
