import { Component, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../shared/interface';
import 'rxjs/add/operator/switchMap';
import { EmployeeService } from '../../shared/stepper.service';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'detail.component.html',
})

export class DetailComponent {

    employee: IEmployee;
    pageTitle: string = 'Customer Details';
    imageWidth: number = 200;

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