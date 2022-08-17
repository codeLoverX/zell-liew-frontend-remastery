import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './hero-detail/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { HeroService } from './services/hero.service';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    // how to use router related functionality
    AppRoutingModule
  ],
  exports: [
    HeroDetailComponent,
    HeroesComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  providers: [
    //must declare all services in Moduke
    HeroService,
    MessageService
  ]
})
export class HeroesModule { }
