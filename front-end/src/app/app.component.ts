import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Senai';
  
  ngOnInit(): void {
   /*  localStorage.setItem('userName', null)
    localStorage.setItem('userId', null)
     */
  }
}
