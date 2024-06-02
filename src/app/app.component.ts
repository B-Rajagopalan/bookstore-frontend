import { Component } from '@angular/core';
import { HelloWorldService } from './services/helloworld.service';

@Component({
  selector: 'app-root',
  template: `
  <app-login></app-login>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bookstore-frontend';

  constructor(private helloWorldService: HelloWorldService) {}

  ngOnInit() {

  }
}
