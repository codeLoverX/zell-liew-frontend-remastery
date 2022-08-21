import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpProviderService } from "../service/http-provider.service";


@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  // closeResult = '';
  employeeList: any = [];
  constructor(private router: Router, 
    // private modalService: NgbModal,
    // private toastr: ToastrService, 
    private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }
  async getAllEmployee() {
    this.httpProvider.getAllEmployee().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.employeeList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.employeeList = [];
            }
          }
        }
      });
  }

  AddEmployee() {
    this.router.navigate(['AddEmployee']);
  }

  deleteEmployeeConfirmation(employee: any) {
    this.deleteEmployee(employee);
    // this.modalService.open(MODALS['deleteModal'],
    //   {
    //     ariaLabelledBy: 'modal-basic-title'
    //   }).result.then((result) => {
    //     this.deleteEmployee(employee);
    //   },
    //     (reason) => {});
  }

  deleteEmployee(employee: any) {
    this.httpProvider.deleteEmployeeById(employee.id).subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData != null && resultData.isSuccess) {
          // this.toastr.success(resultData.message);
          this.getAllEmployee();
        }
      }
    },
    (error : any) => {});
  }
}
