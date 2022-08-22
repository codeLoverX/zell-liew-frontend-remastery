import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { DashboardComponent } from './heroes/hero-detail/dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { IntroComponent } from './templates/intro/intro.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { DirectivesComponent } from './directives/directives/directives.component';
import { AddEmployeeComponent } from './http-crud/add-employee/add-employee.component';
import { AllEmployeeComponent } from './http-crud/all-employee/all-employee.component';
import { EditEmployeeComponent } from './http-crud/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './http-crud/view-employee/view-employee.component';

const routes: Routes = [
  // reroute starting module
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // heroes module
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // templates module
  { path: 'intro', component: IntroComponent },
  { path: 'if', component: IntroComponent },

  // components module
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  //  directives module
  { path: 'directives', component: DirectivesComponent },
 //  http-crud module
 { path: 'addEmployee', component: AddEmployeeComponent },
 { path: 'allEmployee', component: AllEmployeeComponent },
 { path: 'editEmployee', component: EditEmployeeComponent },
 { path: 'viewEmployee', component: ViewEmployeeComponent },
 


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})



export class AppRoutingModule { }
