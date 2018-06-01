import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ADMIN_DB } from './mock-list';
import { IEmployee } from './interface';

@Injectable()
export class AuthService {
    onLoginSuccess = new Subject();
    private hasLoggedin: IEmployee;

    get getCurrentUser() {
        return this.hasLoggedin;
    }

    login(email: string, password: string) {
        let el = ADMIN_DB.find(x => x.email === email && x.password === password);
        this.hasLoggedin = el;
        return el;
    }
}