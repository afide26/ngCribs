import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showForm:boolean = false;

  handleShowForm(){
    this.showForm = !this.showForm;
    console.log('Form was clicked');
  }

}
