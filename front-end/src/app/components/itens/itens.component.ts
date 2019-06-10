import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  constructor() { }
  editorContent: any;
  fileData: File = null;
  dificuldade = [
    { id: 1, nivel: 'Muito Fácil', status: false },
    { id: 2, nivel: 'Fácil', status: false },
    { id: 3, nivel: 'Médio', status: false },
    { id: 4, nivel: 'Difícil', status: false },
    { id: 5, nivel: 'Muito Difícil', status: false }
  ]
  cabecalho = [
    { id: 1, name: 'Enunciado', conteudo: null, type: null },
    { id: 2, name: 'Suporte', conteudo: null, type: null },
    { id: 3, name: 'Comando', conteudo: null, type: null }
  ]
  typeRespostas: any = null
  respostas: any
  item: any

  ngOnInit() {
  }

  imgProgress(fileInput: any, index: number) {
    const file = <File>fileInput.target.files[0];
    this.cabecalho[index].type = "image";
    this.cabecalho[index].conteudo = file;
    const reader = new FileReader();
    reader.onload = e => this.cabecalho[index].conteudo = reader.result;
    reader.readAsDataURL(file);
  }

  setCabecalho = (text: string, index: number) => {
    this.cabecalho[index].conteudo = text;
  }

  addType = (index: number, type: string) => {
    this.cabecalho[index].type = type;
  }

  removeType = (index: number) => {
    this.cabecalho[index].type = null;
  }

  setDificuldade = (item: any) => {
    item.status = true;
    this.dificuldade.forEach((element) => {
      if (element.id !== item.id) {
        element.status = false;
      }
    });
  }

  setResposta = (type: string) => {
    this.typeRespostas = type;
    this.setRespostasObject();
  }

  setRespostasObject = () => {
    this.respostas = [
      { id: 1, alternativa: 'A', type: this.typeRespostas, conteudo: null, gabarito: false },
      { id: 2, alternativa: 'B', type: this.typeRespostas, conteudo: null, gabarito: false },
      { id: 3, alternativa: 'C', type: this.typeRespostas, conteudo: null, gabarito: false },
      { id: 4, alternativa: 'D', type: this.typeRespostas, conteudo: null, gabarito: false },
      { id: 5, alternativa: 'E', type: this.typeRespostas, conteudo: null, gabarito: false }
    ]
  }

  setGabarito = (alternativa) => {
    alternativa.gabarito = true;
    this.respostas.forEach((element) => {
      if (element.id !== alternativa.id) {
        element.gabarito = false;
      }
    });
  }

  addImgResposta = (fileInput: any, index: number) => {
    const file = <File>fileInput.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.respostas[index].conteudo = reader.result;
    reader.readAsDataURL(file);
  }

  salvarItem = () => {
    
  }

  montarItem = () => {

  }

  validarCabecalho() {
    let count = 0
    this.cabecalho.forEach(element => {
      if (element.conteudo != null) {
        count++;
      }
    });

    return count > 0;
  }

  validarRespostas() {
    let alternativa = 0;
    let resposta = 0;
    this.respostas.forEach(element => {
      if (element.conteudo !== null)
        alternativa++;
      if (element.gabarito === true)
        resposta++;
    });

    return alternativa === this.respostas.lenght && resposta === 1;
  }

  validarNivel() {
    let count = 0
    this.dificuldade.forEach(element => {
      if (element.status)
        count++;
    });
    return count > 0;
  }


}
