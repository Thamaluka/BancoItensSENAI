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
  user = new User();
  constructor() { }

  ngOnInit() {
  }

}
