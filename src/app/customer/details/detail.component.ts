import { Component, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { IEmployee } from '../../shared/interface';
import { EmployeeService } from '../../shared/employee.service';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'detail.component.html',
})

export class DetailComponent {

    employee: IEmployee;
    pageTitle: string = 'Customer Details';
    imageWidth: number = 250;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public employeeService: EmployeeService,
    ) { }


    ngOnInit() {
        this.route.params
        .switchMap((params: Params) => 
               this.employeeService.getEmployee(params['id']))
        .subscribe((employee :IEmployee) => this.employee = employee);
    }

    onBack() {
        this.router.navigate(['customer']);
    }


}