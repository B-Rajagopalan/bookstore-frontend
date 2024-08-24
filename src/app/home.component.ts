import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-home',
    template: `
    <div class='books'>
        <div style='margin: 0 auto; padding: 40px;' *ngFor="let book of books">
            <img class="img" src={{book.imgSource}} alt="">
            <span>{{book.bookName}}</span>
        </div>
    </div>
    `,
    styles: [
        `.books {
            display: flex;
            margin: 100px 0;
            background-color: lightgrey;
            border: 100px;
        }
        .img {
            width: 200px;
            height: 150px;
            object-fit: cover;
        }
        `
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