import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  
  
  // using formbuilder
  // The FormBuilder provides syntactic sugar 
  // that shortens creating instances of a FormControl , FormGroup , or FormArray . It reduces the amount of boilerplate
  myForm: FormGroup = this.formBuilder.group({
    name2: ['Sammy', Validators.required],
    email2: ['', [Validators.required, Validators.email]],
    message2: ['', [Validators.required]],
  });


  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log({form})
    console.log('Valid?', form.valid); // true or false
    alert('Name: ' + form.value.name2);
    alert('Email: '+ form.value.email2);
    alert('Message: '+ form.value.message2);
  }

}
