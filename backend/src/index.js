const express = require('express');
const nodemailer = require('nodemailer');

const app = express();

const transporter = nodemailer.createTransport({
    service: 'gmail', // true for 465, false for other ports
    auth: {
        user: "sayomara_christo@estudante.sc.senai.br",
        pass: "otavio1504",
    },
    tls: { rejectUnauthorized: false }
  });

app.get("/sendMail", (req, res) => {
    var emailSend = req.query.email;
    
    const mailOptions = {
        from: 'sayomara_christo@estudante.sc.senai.br',
        to: emailSend,
        subject: 'Recuperação de Senha Banco de Itens',
        text: 'Olá, para recuperar sua senha acesse http://localhost:4200/recoverPass?email=' + emailSend
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          return res.send(error);
        } else {
            return res.send(info);
        }
      });
});

app.listen(8000);