import { Injectable, ViewChild } from "@angular/core";
import { IAdmins } from "./interface";
import { ADMIN_DB } from "./mock-list";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from "rxjs/Subject";
import { AuthService } from "./auth.service";
import { map, filter } from "rxjs/operators";
import 'rxjs/add/observable/range';

@Injectable()
export class AdminService {

    auth: any;
    adminData: IAdmins;

    // get database to component
    getAdmins(): Observable<IAdmins[]> {
        if (!this.auth.getCurrentUser)
            return Observable.of(ADMIN_DB);

        let allElements = ADMIN_DB.find(x => x.role === this.auth.getCurrentUser.role);
        let element = ADMIN_DB.filter(x => x.role == 'user' || x.role === 'manager');
        let user = ADMIN_DB.filter(x => x.role === 'user');

        // validate current user role and return data
        if (allElements.role === 'admin')
            return Observable.of(ADMIN_DB);
        else if (allElements.role === 'manager') {
            return Observable.of(element);
        }
        else {
            return Observable.of(user);
        }
        // return Observable.of(ADMIN_DB.slice(0, 4));
    }

    //get single data from database to component
    getAdmin(id: number): Observable<IAdmins> {
        return Observable.of(ADMIN_DB.find(x => x.id === id));

    }

    //add new admin in form and save
    register(user: any) {
        let max = Math.max(...ADMIN_DB.map(x => x.id));
        user.id = max + 1;
        ADMIN_DB.push(user);
        return ADMIN_DB;
    }
}
