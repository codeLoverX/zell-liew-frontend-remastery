import { NgModule } from '@angular/core';
// contains ng-module directive to use in html
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// ng generate component heroes creates this
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    // contains ng-module directive to use in html
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
