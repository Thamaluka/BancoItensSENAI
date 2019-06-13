import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ValidationService } from 'src/app/services/ValidationService';
import { CursosService } from 'src/app/services/CursosService';
import { UnidadeService } from 'src/app/services/UnidadeService';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm: any;
  activity = true
  cursosSelected = []
  courseList = []
  courseSettings = {}
  topicList = []
  topicSettings = {}
  term = false;
  today = (moment(new Date).locale("pt").format('LL'));

  /* Validação */
  emailValid: boolean = true;
  erroLogin: boolean = true;

  constructor(
    private cursoService: CursosService,
    private unidadeService: UnidadeService
  ) { }


  ngOnInit() {
    this.cursoService.getAllCursos().subscribe((data) => {
      this.courseList = data
    })

    this.courseSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };


    this.topicSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  onCursoSelect(curso) {
    this.cursosSelected.push(curso);
    this.getUnidadeCurricularPorCurso(curso.id);
  }

  onCursoDeselect(curso) {
    let newList = this.cursosSelected.filter(item => item.id !== curso.id)
    this.cursosSelected = newList;
  }

  onCursoSelectAll(cursos) {
    this.cursosSelected = cursos;
  }


  validateEmail(email: string) {
    this.emailValid = ValidationService.emailValidator(email)
  }

  validatePassworld(passworld: string) {
    console.log(ValidationService.passwordValidator(passworld));
  }

  validarCpf(cpf: string) {
    console.log(ValidationService.cpfValidator(cpf))
  }

  getUnidadeCurricularPorCurso(id) {
    this.cursoService.getUnidadesCurricularesByCurso(id).subscribe((data) => {
      if (this.topicList.length > 0)
        data.forEach(element => {
            this.topicList.push(element)
        });
        else
        this.topicList = data;

        console.log( this.topicList)
    })
  }


}
