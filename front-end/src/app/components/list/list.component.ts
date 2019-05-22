import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() list: []
  @Output() listChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendItem(item){
    this.listChanged.emit(item);
  }


}
