import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  constructor() { }
  fileData: File = null;

  cabecalho = [
    { id: 1, name: 'Enunciado', text: null, image: null, type: null },
    { id: 2, name: 'Suporte', text: null, image: null, type: null },
    { id: 3, name: 'Comando', text: null, image: null, type: null }
  ]

  ngOnInit() {
  }

  imgProgress(fileInput: any, index: number) {
    const file = <File>fileInput.target.files[0];
    this.cabecalho[index].type = "image";
    this.cabecalho[index].image = file;
    const reader = new FileReader();
    reader.onload = e => this.cabecalho[index].image = reader.result;
    reader.readAsDataURL(file);
  }

  teste() {
    console.log("AUI")
  }

  addType = (index: number, type: string) => {
    this.cabecalho[index].type = type;
  }

  removeType = (index: number, ) => {
    this.cabecalho[index].type = null;
  }

}
