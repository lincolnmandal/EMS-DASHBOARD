import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../shared/stepper.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { IEmployee } from '../../shared/interface';
import 'rxjs/add/operator/switchMap';
import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    selector: 'employee-detail',
    templateUrl: 'detail.component.html',
})

export class DetailComponent implements OnInit {
    // public hero: IEmployee;

    // constructor(private _heroService: EmployeeService,
    //   private _routeParams: ParamMap) {
    // }

    // ngOnInit() {
    //   if (!this.hero) {
    //     let id = +this._routeParams.get('id');
    //     this._heroService.getHero(id).then(hero => this.hero = hero);
    //   }
    // }

    employees = [];
    order: any;
    pageTitle: string = 'Customer Detail';

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _employeeService: EmployeeService
    ) {
        this._employeeService.getEmployees()
            .subscribe(order => this.order = order);
    }

    onBack() {
        this.router.navigate(['customer']);
    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
        this.route.paramMap
            .switchMap((params: ParamMap) => this._employeeService.getEmployee(+params.get('id')))
            .subscribe(order => this.order = order);
    }
}