import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/services/ValidationService';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  activity = true
  courseList = [];
  courseSettings = {};
  topicList = [];
  topicSettings = {};
  term = false;
  today = (moment(new Date).locale("pt").format('LL'));

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, ValidationService.emailValidator]]
    })
  }


  ngOnInit() {

    this.courseList = [
      { item_id: 1, item_text: 'Técnico em Programação de Jogos' },
      { item_id: 2, item_text: 'Técnico em Alimentos' },
      { item_id: 3, item_text: 'Técnico em Segurança da Informação' },
      { item_id: 4, item_text: 'Técnico em Analise de Sistema' },
      { item_id: 5, item_text: 'Técnico em Redes' }
    ];

    this.courseSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
    this.topicList = [
      { item_id: 1, item_text: 'Lógica de Programação' },
      { item_id: 2, item_text: 'Arquitetura de Redes' },
      { item_id: 3, item_text: 'Segurança da Informação' },
      { item_id: 4, item_text: 'Relação humana no trabalho' },
      { item_id: 5, item_text: 'Programação orientada a objetos' }
    ];

    this.topicSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }
}
