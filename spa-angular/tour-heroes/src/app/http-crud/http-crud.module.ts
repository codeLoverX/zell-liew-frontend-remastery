import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllEmployeeComponent } from '../http-crud/all-employee/all-employee.component';
import { AddEmployeeComponent } from '../http-crud/add-employee/add-employee.component';
import { EditEmployeeComponent } from '../http-crud/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from '../http-crud/view-employee/view-employee.component';
import { HttpProviderService } from './service/http-provider.service';
import { WebApiService } from './service/web-api.service';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AllEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    CommonModule,
    // use angular router
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [
    AllEmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent
  ],
  providers: [
    // specify provider
    HttpProviderService,
    WebApiService
  ]
})
export class HttpCrudModule { }
