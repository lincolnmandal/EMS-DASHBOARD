import { Component } from "@angular/core";
import { trigger, transition, animate, style, state } from "@angular/animations";

@Component({
    selector: 'contact-app',
    templateUrl: 'contact.component.html',
})
export class ContactComponent {
    fullImagePath1: string;
    constructor() {
        this.fullImagePath1 = '../assets/img/umesh.jpg';
    }
}