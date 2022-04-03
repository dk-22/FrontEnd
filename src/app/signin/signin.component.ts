import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
 
  siginForm: FormGroup;  
  
  constructor(private formBuilder: FormBuilder) { 
    /*
    this.siginForm = formBuilder.group({ // building the form using formBuilder
      emailAdd : new FormControl(), // In the formBuilder - we are creating a group of form elements
      passwrd : new FormControl()
  })
*/
this.siginForm = formBuilder.group({ // building the form using formBuilder
  emailAdd : ['', [Validators.required, Validators.email]],
  passwrd : ['', Validators.required],
})


}

  ngOnInit(): void {
  }

  postData(){
    console.log(this.siginForm);
  }

}
