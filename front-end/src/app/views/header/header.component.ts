import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { StorageService } from 'src/app/services/StorageService';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {
  isLogin: boolean = false
  routerName: string = 'Home';
  state: any;
  user = null;

  constructor(
    private localstorage: StorageService
  ) {

  }

  ngOnInit() {
    this.localstorage.watchStorage().subscribe((data) => {
      this.user = new User
      this.user.nome = localStorage.getItem("userName") !== undefined ? localStorage.getItem("userName") : null;
    })
  }

  logginOff() {
    this.user = null
    this.localstorage.cleanStorage()
  }

}

