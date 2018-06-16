import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import 'rxjs/add/observable/range';
import { IEmployee } from '../shared/interface';
import { EmployeeService } from '../shared/employee.service';

@Component({
    selector: 'customer-list',
    templateUrl: 'customer-list.component.html',
//     styles: [`
//     .a {
//         cursor: pointer;
//     }
//     .table-bordered {
//         border: 1px solid #d5dbe0;
//         color: snow;
//     }
// `],
})
export class CustomerListComponent implements OnInit {

    employees: IEmployee[];
    imageWidth: number = 60;
    showImage: boolean = true;
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