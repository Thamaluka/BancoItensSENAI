import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ValidationService } from 'src/app/services/ValidationService';
import { CursosService } from 'src/app/services/CursosService';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/UserService';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/StorageService';

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

  email: string
  passworld: string
  emailLogin: boolean = true;
  passLogin: boolean = true;


  /* Validação Registro*/
  emailValid: boolean = true;
  senhaValid: boolean = true;
  senhaIsEqual: boolean = true;
  cpfValid: boolean = true;
  erroLogin: boolean = true;
  cursoValid: boolean = true;
  ucValid: boolean = true;
  obrigatorios: boolean = true;
  loginValidation: string = ""

  constructor(
    private cursoService: CursosService,
    private userService: UserService,
    private router: Router,
    private localStorage: StorageService
  ) { }


  ngOnInit() {
    this.cursoService.getAllCursos().subscribe((data) => {
      this.courseList = data
    })

    this.courseSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };


    this.topicSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'nome',
      itemsShowLimit: 1,
      noDataAvailablePlaceholderText: "Selecione um curso",
      allowSearchFilter: true
    };
  }

  onCursoSelect(curso) {
    this.cursosSelected.push(curso.id);
    this.getUnidadeCurricularPorCurso(curso.id);
  }

  onCursoDeselect(curso) {
    let newList = this.cursosSelected.filter(item => item !== curso.id)
    newList.forEach(element => {
      this.getUnidadeCurricularPorCurso(element.id)
    });
    this.cursosSelected = newList;
  }

  onCursoSelectAll(cursos) {
    this.cursosSelected = [];
    cursos.forEach(element => {
      this.cursosSelected.push(element.id)
      this.getUnidadeCurricularPorCurso(element.id)
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
    if (!this.activity)
      this.emailValid = ValidationService.emailValidator(email)
    else
      this.emailLogin = ValidationService.emailValidator(this.email)
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
    this.userService.newUser(this.user).subscribe((data) => {
      location.reload();
    })
  }


  login() {
    this.loginValidation = "";
    this.emailLogin = true;
    this.passLogin = true;
    if (this.email && this.passworld) {

      let user = {
        email: this.email,
        senha: this.passworld
      }


      this.userService.login(user).subscribe(
        (data) => {
          this.localStorage.setItem('userName', data.nome)
          this.localStorage.setItem('userId', data.id)
          this.router.navigateByUrl('/home')
        },
        (err) => {
          this.loginValidation = err.error
        }
      )
    } else {
      this.emailLogin = false;
      this.passLogin = false;
    }


  }



}
