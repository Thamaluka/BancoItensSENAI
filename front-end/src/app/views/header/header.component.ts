import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false
  routerName: string = 'Home';
  state: any;
  user = localStorage.getItem('userName');

  constructor(
  ) {

  }

  ngOnInit() {
    console.log(!this.user)
  }




}
