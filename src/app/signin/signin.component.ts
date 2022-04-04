import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 
  siginForm: FormGroup;  

  welcomeMsg='welcome back'
  innerEmail='Email'
  innerPwd='Password'
  emailAdd=new FormControl('');

  showAlert(em, pwd){
    alert('Email is '+em +'\n\nPassword is '+pwd)
    // alert('Password is '+pwd)
    // console.log('Email is'+this.emailAdd)
  }
  
  constructor(private formBuilder: FormBuilder) { 
    /*
    this.siginForm = formBuilder.group({ // building the form using formBuilder
      emailAdd : new FormControl(), // In the formBuilder - we are creating a group of form elements
      passwrd : new FormControl()
  })
*/
this.siginForm = formBuilder.group({ // building the form using formBuilder
  emailAdd : ['', [Validators.required, Validators.email]],
  passwrd : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
})


}

  ngOnInit(): void {
  }

  postData(){
    console.log(this.siginForm);
  }

}
