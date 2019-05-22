import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  title: String = "Selecione o Curso"
  describe: String = "Selecione o curso em que o item pertencerá"
  curso = null
  materia = null
  resposta = null

  list = [
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" },
    { name: "Analíse e desenvolvimento de sistema" }
  ]

  constructor() { }

  ngOnInit() {
  }


  listChangedHandle(item) {
    if (this.curso === null) {
      this.curso = item
      this.list = [
        { name: "Lógica de programação" },
        { name: "Matemática aplicada" },
        { name: "Projeto de banco de dados" },
        { name: "Relações humanas no trabalho" },
        { name: "Lógica de programação" },
        { name: "Lógica de programação" },
        { name: "Lógica de programação" }
      ]
      this.title = "Seleciona a Matéria"
      this.describe = "Selecione a matéria em que o item pertencerá"
    } else {
      this.materia = item
      this.list = null
      this.title = "Selecione a capacidade da  Matriz "
      this.describe = "Se possuir selecione a matriz em que o item pertencerá"
    }
  }
}
