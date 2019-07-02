import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private _sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
  ) { }
  uploadedFiles: Array<File>;
  comment = "<p><em><strong>abc</strong></em> gasjdgajsdhajsdgajsgdajbdshjadsvhjhadsv</p>"
  state
  header
  @Input() item: any


  ngOnInit() {
    console.log(this.item)
    this.state = this.activatedRoute.paramMap
    .pipe((() => window.history.state))
    this.header = {
      curso: this.state.header.curso.nome,
      uc: this.state.header.materia.nome,
      matriz: !!this.state.header.matriz ? this.state.header.matriz.matriz : ""
    }
  }

  



/*   fileChange(element) {
    this.uploadedFiles = element.target.files;

  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    console.log(formData)
    this.http.post('http://localhost:3000/api/upload', formData)

      .subscribe((response) => {
        console.log('response received is ', response);
      })
  }

  showImage() {
    this.http.get('http://localhost:3000/api/upload').subscribe((data) => {
      console.log(data)
      this.imagemTest = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + data);
    })
  } */

}
