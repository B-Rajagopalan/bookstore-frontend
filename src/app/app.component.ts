import { Component } from '@angular/core';
import { HelloWorldService } from './services/helloworld.service';

@Component({
  selector: 'app-root',
  template: `{{message}}`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore-frontend';
  message = ''

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit() {
    this.helloWorldService.getHelloWorld().subscribe((data) => {
        this.message = data;
    })
  }
}
