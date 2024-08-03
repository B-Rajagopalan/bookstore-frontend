import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-home',
    template: `
    <div class='books'>
        <div style='margin: 0 auto; padding: 40px;' *ngFor="let book of books">
            {{book.bookName}} <br>
        </div>
    </div>
    `,
    styles: [
        `.books {
            display: flex;
            flex-direction: row;
            background-color: aqua;
            width: 800px;
            height: 150px;
            margin: 100px auto;
        }`
    ]
})

export class HomeComponent implements OnInit {
    books!: [any];
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getBooksData().subscribe(data => {
            this.books = data;
        });
    }
}