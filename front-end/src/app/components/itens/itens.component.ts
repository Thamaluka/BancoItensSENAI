import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/ItemService';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService

  ) { }
  editorContent: any;
  fileData: File = null;

  dificuldade = []
  cabecalho = []
  typeRespostas: any = null
  respostas: any = null
  item: any
  state: any
  /* erros */
  cabecalhoInvalid: boolean = false
  alternativaInvalid: boolean = false
  nivelInvalid: boolean = false
  form: boolean = false
  curso: any
  unidadeCurricular: any
  matriz: any

  ngOnInit() {
    this.state = this.activatedRoute.paramMap
      .pipe((() => window.history.state))
    this.curso = !!this.state.header.curso.nome ? this.state.header.curso.nome : null
    this.unidadeCurricular = !!this.state.header.materia.nome ? this.state.header.materia.nome : null
    this.matriz = !!this.state.header.matriz ? this.state.header.matriz.matriz : ""
    this.itemService.getNiveis().subscribe((data) => {
      if (data) {
        data.forEach(element => {
          element.status = false
          this.dificuldade.push(element)
        });
      }
    })

    this.itemService.getCabecalho().subscribe((data) => {
      if (data) {
        data.forEach(element => {
          element.conteudo = null
          element.type = null
          this.cabecalho.push(element)
        });
      }
    })

  }

  imgProgress(fileInput: any, index: number) {
    const file = <File>fileInput.target.files[0];
    this.cabecalho[index].type = "image";
    this.cabecalho[index].conteudo = file;

    const reader = new FileReader();
    reader.onload = e => this.cabecalho[index].conteudo = reader.result;
    reader.readAsDataURL(file);

  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    var base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  setCabecalho = (text: string, index: number) => {
    this.cabecalho[index].conteudo = text;
  }

  addType = (index: number, type: string) => {
    this.cabecalho[index].type = type;
  }

  removeType = (index: number) => {
    this.cabecalho[index].type = null;
    this.cabecalho[index].conteudo = null;
  }

  setDificuldade = (item: any) => {
    item.status = !item.status;
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
      { alternativa: 'A', type: this.typeRespostas, conteudo: null, gabarito: false },
      { alternativa: 'B', type: this.typeRespostas, conteudo: null, gabarito: false },
      { alternativa: 'C', type: this.typeRespostas, conteudo: null, gabarito: false },
      { alternativa: 'D', type: this.typeRespostas, conteudo: null, gabarito: false },
      { alternativa: 'E', type: this.typeRespostas, conteudo: null, gabarito: false }
    ]
  }

  setGabarito = (alternativa) => {
    alternativa.gabarito = true;
    this.respostas.forEach((element) => {
      if (element.alternativa !== alternativa.alternativa) {
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

  salvarItem() {
    let nivel = this.item.dificuldade.filter((item) => item.status === true)
    let cabecalho = this.item.cabecalho.filter((item) => item.conteudo !== null)

    const body = {
      id_docente: parseInt(localStorage.getItem("userId")),
      id_curso: this.item.curso,
      id_nivel: nivel[0].id,
      id_uc: this.item.uc,
      id_matriz: this.item.matriz,
      cabecalho: cabecalho,
      alternativas: this.item.alternativas
    }
    /*   let formData = 
      this.itemService.newItem(body).subscribe(
        (data) => {
          console.log(data, "Item Criado com sucesso!")
        },
        (err) => {
          console.log(err, "Não foi possível !")
        }
      ) */
  }

  validateItem = () => {
    this.validarCabecalho();
    this.validarRespostas();
    this.validarNivel();
    if (!this.cabecalhoInvalid && !this.nivelInvalid && !this.alternativaInvalid) {
      this.item = {
        cabecalho: this.cabecalho,
        alternativas: this.respostas,
        dificuldade: this.dificuldade,
        matriz: !!this.state.header.matriz.id ? this.state.header.matriz.id : null,
        curso: this.state.header.curso.id,
        uc: this.state.header.materia.id
      }
      this.salvarItem()
    }
  }

  validarCabecalho = () => {
    let count = 0
    this.cabecalho.forEach(element => {
      if (element.conteudo != null) {
        count++;
      }
    });
    if (count > 0) {
      this.cabecalhoInvalid = false;
      return true;
    } else {
      this.cabecalhoInvalid = true;
      return false;
    }
  }

  validarRespostas = () => {
    let alternativa = 0;
    let resposta = 0;

    if (this.respostas !== null) {
      this.respostas.forEach(element => {
        if (element.conteudo !== null)
          alternativa++;
        if (element.gabarito === true)
          resposta++;
      });
    } else {
      this.alternativaInvalid = true;
      return false
    }

    if (alternativa === this.respostas.length && resposta === 1) {
      this.alternativaInvalid = false;
      return true
    } else {
      this.alternativaInvalid = true;
      return false
    }
  }

  validarNivel = () => {
    let count = 0
    this.dificuldade.forEach(element => {
      if (element.status)
        count++;
    });
    if (count > 0) {
      this.nivelInvalid = false;
      return true;
    } else {
      this.nivelInvalid = true;
      return false;
    }
  }




}
