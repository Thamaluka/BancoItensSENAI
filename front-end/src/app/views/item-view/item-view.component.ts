import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  constructor() { }
  @Input() item: any
  ngOnInit() {
    console.log(this.item)
  }

}
