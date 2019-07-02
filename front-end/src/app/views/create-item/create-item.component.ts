import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/CursosService';
import { MatrizService } from 'src/app/services/MatrizService';

@Component({
  selector: 'create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {
  userId
  title: String = "Selecione o Curso"
  describe: String = "Selecione o curso em que o item pertencerá"
  curso = null
  materia = null
  matrizList = []
  matriz = null
  list = []

  constructor(
    private router: Router,
    private cursoService: CursosService,
    private matrizService: MatrizService
  ) { }

  ngOnInit() {
    if (localStorage.getItem('userId')) {
      this.userId = localStorage.getItem('userId');
    }

    this.cursoService.getCursosByUser(this.userId).subscribe((data) => {
      data.forEach(element => {
        this.list.push(element)
      });
    })

    this.matrizService.getAllMatriz().subscribe((data)=>{
      this.matrizList = data
    })

  }


  listChangedHandle(item) {
    if (this.curso === null) {
      this.curso = item
      this.list = [];
      this.cursoService.getUcByUser(this.userId).subscribe((data) => {
        data.forEach(element => {
          this.list.push(element)
          this.title = "Seleciona a Matéria"
          this.describe = "Selecione a matéria em que o item pertencerá"
        });
      })

    } else {
      this.materia = item
      this.list = null
      this.title = "Selecione a capacidade da  Matriz "
      this.describe = "Se possuir selecione a matriz em que o item pertencerá"
    }
  }

  setMatriz(matriz) {
    this.matriz = matriz;
    this.goTo();
  }

  goTo() {
    const header = {
      curso: this.curso,
      materia: this.materia,
      matriz: this.matriz
    }
    this.router.navigateByUrl('/new-item', { state: { header: header } });
  }




}
