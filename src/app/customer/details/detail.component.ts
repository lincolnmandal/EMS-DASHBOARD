import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../shared/stepper.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from '../../shared/interface';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'detail.component.html',
})

export class DetailComponent implements OnInit {
    sub: any;
    employees = [];
    pageTitle: string = 'Customer Detail';
    @Input() childData: IEmployee;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _employeeService: EmployeeService
    ) { }
    ngOnInit() {
        let employees = this._employeeService.getEmployees();
        let id = +this.route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        // this.sub = this.route.params.subscribe(params => {
            // let id = params['id'];
            // Retrieve EmployeeDetails with Id route param
            this._employeeService.getEmployee(id).subscribe(() => this.employees = this.employees);
        // });
    }

    onBack() {
        this.router.navigate(['/customer']);
    }
}
