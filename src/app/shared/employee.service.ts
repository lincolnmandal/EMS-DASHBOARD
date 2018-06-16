import { Injectable, ViewChild } from "@angular/core";
import { IEmployee } from "./interface";
import { ADMIN_DB } from "./mock-list";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
import { Subject } from "rxjs/Subject";
import { AuthService } from "./auth.service";
import { map, filter } from "rxjs/operators";
import 'rxjs/add/observable/range';

@Injectable()
export class EmployeeService {

    constructor(private auth: AuthService) { }

    getEmployees(): Observable<IEmployee[]> {
        return Observable.of(ADMIN_DB);
    }

    getEmployee(id): Observable<IEmployee> {
        return Observable.of(ADMIN_DB.find(x => x.id == id));
    }

    onDeleteClick(id: number) {
        let data = ADMIN_DB;
        let index = data.findIndex(x => x.id === id);

        if (index > -1) {
            data.splice(index, 1);
        }
        return Observable.of(ADMIN_DB);
    }

    onEditClick(body: any) {
        let index = ADMIN_DB.findIndex(x => x.id === body.id);

        if (index > -1) {
            ADMIN_DB[index] = body;
            return Observable.of(ADMIN_DB);
        } {
            // let max = Math.max(...this.ADMIN_DB.map(x => x.id));
            // body.id = max + 1;
            // ADMIN_DB.push(body);
            // return Observable.of(ADMIN_DB);
        }
    }

    register(user: any) {
        let max = Math.max(...ADMIN_DB.map(x => x.id));
        user.id = max + 1;
        ADMIN_DB.push(user);
        return ADMIN_DB;
    }
}