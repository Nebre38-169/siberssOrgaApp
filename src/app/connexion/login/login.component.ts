import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      boquette : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  onSubmitForm(){
    this.errorMessage = false;
    const formValue = this.loginForm.value;
    this.auth.login(formValue.boquette,formValue.password)
    .subscribe(value =>{
      if(value instanceof Error){
        if(value.message.includes('email')){
          this.errorMessage= true;
        } else {
          console.log(value);
        }
      } else {
        this.router.navigate(['home']);
      }
    });
  }

}
