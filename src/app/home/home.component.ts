import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    // styles: [`
    // .page-header .motto {
    //     z-index: 3;
    //     color: #fff;
    //     position: relative;
    //     top: 100px;
    //     right: 150px;
    // }
    // `]
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
