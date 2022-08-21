import { NgModule } from '@angular/core';
// contains ng-module directive to use in html
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// ng generate component heroes creates this

import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { HeroService } from './heroes/services/hero.service';
import { TemplatesModule } from './templates/templates.module';
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { HttpCrudModule } from './http-crud/http-crud.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // styling
    NgbModule,
    BrowserModule,
    // contains ng-module directive to use in html
    AppRoutingModule,
    // to get a component from module import the module
    HeroesModule,
    // All modules must be declared at AppModule or Routing will fail
    TemplatesModule,
    ComponentsModule,
    DirectivesModule,
    HttpCrudModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
