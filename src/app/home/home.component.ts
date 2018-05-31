import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    fullImagePath1: string;
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() {
        this.fullImagePath1 = '../assets/img/umesh.jpg';
     }

    ngOnInit() {}
}
