import {
    Component, OnInit, ComponentFactoryResolver, ViewChildren,
    ViewContainerRef, QueryList, AfterViewInit, ViewChild, ComponentFactory, Input
} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";


import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/range';

import { filter, map, delay, delayWhen, flatMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { merge } from 'rxjs/observable/merge';
import { ADMIN_DB } from '../shared/mock-list';
import { IEmployee } from '../shared/interface';
import { EmployeeService } from '../shared/stepper.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
    styles: [`
    .a {
        cursor: pointer;
    }
    .table-bordered {
        border: 1px solid #d5dbe0;
        color: snow;
    }
`],
})
export class CustomerListComponent implements OnInit {

    employees: IEmployee[];
    imageWidth: number = 50;
    showImage: boolean = false;
    selectedEmployeeId: number = null;

    constructor(
        public employeeService: EmployeeService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onselect(employee) {
        this.selectedEmployeeId = employee.id;
    }

    onBack() {
        this.router.navigate(['login']);
    }
}