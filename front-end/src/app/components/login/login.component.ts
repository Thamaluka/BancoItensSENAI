import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ValidationService } from 'src/app/services/ValidationService';
import { CursosService } from 'src/app/services/CursosService';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/UserService';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  activity = true
  cursosSelected = []
  courseList = []
  courseSettings = {}
  ucsSelected = []
  topicList = []
  topicSettings = {}
  term = false;
  today = (moment(new Date).locale("pt").format('LL'));

  user = new User();

  /* Validação */
  emailValid: boolean = true;
  senhaValid: boolean = true;
  senhaIsEqual: boolean = true;
  cpfValid: boolean = true;
  erroLogin: boolean = true;
  cursoValid: boolean = true;
  ucValid: boolean = true;
  obrigatorios: boolean = true;

  constructor(
    private cursoService: CursosService,
    private userService: UserService,
    private router: Router
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
    this.cursosSelected.push(curso.id);
    this.getUnidadeCurricularPorCurso(curso.id);
  }

  onCursoDeselect(curso) {
    let newList = this.cursosSelected.filter(item => item !== curso.id)
    this.cursosSelected = newList;
  }

  onCursoSelectAll(cursos) {
    cursos.forEach(element => {
      this.cursosSelected.push(element.id)
    });

  }

  getUnidadeCurricularPorCurso(id: number) {
    this.cursoService.getUnidadesCurricularesByCurso(id).subscribe((data) => {
      if (this.topicList.length > 0)
        data.forEach(element => {
          this.topicList.push(element)
        });
      else
        this.topicList = data;
    })
  }

  onUcSelect(uc) {
    this.ucsSelected.push(uc.id);
  }

  onUcDeselect(uc) {
    let newList = this.ucsSelected.filter(item => item !== uc.id)
    this.ucsSelected = newList;
  }

  onUcSelectAll(ucs) {
    ucs.forEach(element => {
      this.ucsSelected.push(element.id)
    });
  }


  validateEmail(email: string = "") {
    this.emailValid = ValidationService.emailValidator(email)
  }

  validatePassworld(passworld: string = "") {
    this.senhaValid = ValidationService.passwordValidator(passworld);
  }

  validarCpf(cpf: string = "") {
    this.cpfValid = ValidationService.cpfValidator(cpf);
  }

  validarCurso() {
    this.cursoValid = this.cursosSelected.length > 0;
  }

  validarMateria() {
    this.ucValid = this.ucsSelected.length > 0;
  }

  confirmarSenha(senha) {
    this.senhaIsEqual = senha === this.user.senha
  }


  submit() {
    this.validarCurso();
    this.validarMateria();
    this.validateEmail(this.user.email)
    this.validatePassworld(this.user.senha)
    this.validarCpf(this.user.cpf)
    this.obrigatorios = !!this.user.nome && !!this.user.matricula;
    if (this.emailValid &&
      this.senhaValid &&
      this.senhaIsEqual &&
      this.cpfValid &&
      this.cursoValid &&
      this.ucValid &&
      this.obrigatorios
    ) { this.term = true }
  }

  createNewUser() {
    this.user.cursos = this.cursosSelected;
    this.user.uc = this.ucsSelected;
    console.log(this.user)
    this.userService.newUser(this.user).subscribe((data) => {
      console.log("DATA: ", data)
      this.router.navigateByUrl('/home');
    })
  }
}
