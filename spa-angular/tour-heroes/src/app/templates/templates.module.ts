import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { NestedComponent } from './nested/nested.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   IntroComponent,
   NestedComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
   IntroComponent
  ],
 
})
export class TemplatesModule { }
