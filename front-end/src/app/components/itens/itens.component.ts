import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  constructor() { }
  ckeditorContent: string = '<p>Some html</p>';
  type: string = 'Enunciado'
  cabecalho = [
    { text: null, image: null, type: null }
  ]

  ngOnInit() {
  }

  addType = (index: number, type: string) => {
    this.cabecalho[index].type = type;
    /*   const newItem = {
        text: null, image: null, type: null 
      }
      this.cabecalho.push(newItem) */
  }

  removeType = (index: number,) => {
    this.cabecalho[index].type = null;
  }

}
