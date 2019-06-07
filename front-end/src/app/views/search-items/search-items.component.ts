import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.scss']
})
export class SearchItemsComponent implements OnInit {

  constructor() { }

  enunciado: string;
  resposta: string;

  listaCurso: any[] = [
    { item_id: 1, item_text: 'Técnico em Programação de Jogos' },
    { item_id: 2, item_text: 'Técnico em Alimentos' },
    { item_id: 3, item_text: 'Técnico em Segurança da Informação' },
    { item_id: 4, item_text: 'Técnico em Analise de Sistema' },
    { item_id: 5, item_text: 'Técnico em Redes' }
  ];

  listaCursoSettings = {
    singleSelection: true,
    idField: 'item_id',
    textField: 'item_text',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };

  listaDisciplina: any[] = [
    { item_id: 1, item_text: "LÓGICA DE PROGRAMAÇÃO" },
    { item_id: 2, item_text: "MATEMÁTICA APLICADA" },
    { item_id: 3, item_text: "PROJETO DE BANCO DE DADOS" },
    { item_id: 4, item_text: "RELAÇÕES HUMANAS NO TRABALHO" }
  ];

  listaDisciplinaSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',    
    selectAllText: 'Todos',
    unSelectAllText: 'Nenhum',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  listaMatriz: any[] = [
    { item_id: 1, item_text: "C1" },
    { item_id: 2, item_text: "C2" },
    { item_id: 3, item_text: "C3" },
    { item_id: 4, item_text: "C4" },
    { item_id: 5, item_text: "C5" },
    { item_id: 6, item_text: "C6" },
    { item_id: 7, item_text: "C7" },
    { item_id: 8, item_text: "C8" },
    { item_id: 9, item_text: "C9" }
  ];

  listaMatrizSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',    
    selectAllText: 'Todos',
    unSelectAllText: 'Nenhum',
    itemsShowLimit: 9,
    allowSearchFilter: true
  };

  ngOnInit() {
  }

}


<div class="container">
  <div class="d-flex justify-content-between">
    <div class="title">
      <h3>Pesquisar Itens</h3>
    </div>
  </div>
  <div class="justify-content-between">
    <div class="form-group">
      <label>Curso: </label>
      <ng-multiselect-dropdown [placeholder]="'Curso'" [data]="listaCurso" [settings]="listaCursoSettings">
      </ng-multiselect-dropdown>

      <label>Disciplina:</label>
      <ng-multiselect-dropdown [placeholder]="'Disciplina'" [data]="listaDisciplina"
        [settings]="listaDisciplinaSettings">
      </ng-multiselect-dropdown>

      <label>Capacidade Matriz:</label>
      <ng-multiselect-dropdown [placeholder]="'Capacidade Matriz'" [data]="listaMatriz"
        [settings]="listaMatrizSettings">
      </ng-multiselect-dropdown>
    </div>
    <div class="form-group">
      <label>Enunciado: </label>
      <input class="form-control" type="text" value="{{enunciado}}">
    </div>
  </div>
  <div class="form-group">
    <label>Resposta: </label>
    <input class="form-control" type="text" value="{{resposta}}">
  </div>
  <div class="form-group">
      <button class="btn btn-primary">Pesquisar</button>
  </div>
</div>
