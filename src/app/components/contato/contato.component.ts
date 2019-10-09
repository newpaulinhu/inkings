import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public contato = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensagem: new FormControl('', [Validators.required])
  });

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contato.value);
    if (this.contato.valid) {
      this.contatoService.contato(this.contato.value).subscribe();
    }
  }

}
