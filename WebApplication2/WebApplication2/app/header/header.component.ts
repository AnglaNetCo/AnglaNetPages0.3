import { Component } from '@angular/core';

@Component({
    selector: 'my-header',
    templateUrl: './app/header/header.component.html',
    styleUrls: ['./app/header/header.component.css']
})
export class HeaderComponent {
    selected: number;

    constructor() {
        //this.titles = ["Tasks", "Repetitor"];
        console.log("Hello");
    }

    select(n: number) {
        this.selected = n;
    }
}