import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  header: Observable<object>;
  itemHeader = null;


  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.header = this.activatedRoute.paramMap
      .pipe((() => window.history.state))
    this.itemHeader = this.header;
    console.log(this.itemHeader)
  }

}
