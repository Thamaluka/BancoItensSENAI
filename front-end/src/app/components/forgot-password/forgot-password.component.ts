import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  enviarEmail() {
    if (this.email != undefined && this.email.includes('@') && this.email.includes('.com')) {
      this.http.get('localhost:8000/sendMail?email' + this.email).subscribe(res => {
        alert(res);
        this.router.navigate(['/']);
      });
    }
    else{
      alert('Email Inválido!');
    }
  }

}

