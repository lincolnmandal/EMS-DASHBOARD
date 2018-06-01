import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class EmployerDetailGuard implements CanActivate {
    constructor(private router: Router ){

    }
    canActivate(route:ActivatedRouteSnapshot): boolean {
        let id =+route.url[1].path;
        if(isNaN(id) || id <1) {
            alert("Invalid customer Id");
           this.router.navigate(['/customer']);
            return false;
        };
        return true;
    }
}