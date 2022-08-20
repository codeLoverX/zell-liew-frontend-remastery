import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  //   DIRECTIVE TYPES	DETAILS
  // A. Components
  // B. Attribute directives	
  // C. Structural directives

  // B. Attribute directives
  // ngClass, ngStyle, ngModel

  // B1. ngClass
  isSpecial = true
  currentClasses: Record<string, boolean> = {};
  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      special: true,
    };
  }
  changeClass() {
    this.setCurrentClasses()
  }
  // B2. ngStyle
  currentStyles: Record<string, string> = {
    'font-size': '24px',
    'font-weight': 'bold',

  };
  changeStyle() {
    this.currentStyles = {
      'font-weight': 'normal',
      'font-size': '16px'
    };
  }
  // B3. ngModel : in templates (2-way binding) and template driven forms

  // C. Structural directives
  // ngFor, ngIf, ngSwitch

  constructor() { }

  ngOnInit(): void {
  }

}
