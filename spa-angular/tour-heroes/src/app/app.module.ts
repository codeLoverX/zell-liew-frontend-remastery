import { NgModule } from '@angular/core';
// contains ng-module directive to use in html
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// ng generate component heroes creates this

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroService } from './heroes/services/hero.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // contains ng-module directive to use in html
    AppRoutingModule,
    // to get a component from module import the module
    HeroesModule,
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
