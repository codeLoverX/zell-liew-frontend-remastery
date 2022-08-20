import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  /*
  A. One way: from source to view {{}} AND []
  A1. interpolation
  A2. Property binding
  A2a) Element property
  A2b) Component property
  A2c) Directive property
  A1. Interpolation refers to embedding expressions into marked up text. 
  By default, interpolation uses the double curly braces {{ and }} as delimiters.
  */
  currentCustomer = 'Maria';
  //  A2b) Component property 
  age = 10
  isSpecial = false;
  constructor() { }
  /* Event binding/ up the tree */
  /* B1. One way UP the tree: Normal event from view to source {{}} */
  newPerson = 'John'
  /* B2. One way up UP the tree: Component event from child to parent {{}} */
  musicians = ['Ed Sheeran', 'Prince Indah', 'Emma Jalamo'];
  addArtists(newMusician: any) {
    this.musicians.push(newMusician);
  }

  // infer function type
  // onInput(event: any){    console.log({event}) }
  onInput(event: Event) {
    this.newPerson = (<HTMLInputElement>event.target).value
  }
  /* C. Two way */
  ngModelTwoWay: string = ""
  ngOnInit(): void {
  }

}
