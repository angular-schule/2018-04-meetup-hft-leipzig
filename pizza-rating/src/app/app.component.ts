import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Rating!';

  constructor() {
    /*setTimeout(() => {
      this.title = 'Hallo Leipzig';
    }, 2000);*/
  }
}
