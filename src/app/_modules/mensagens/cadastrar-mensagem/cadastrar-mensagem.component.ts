import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-mensagem',
  templateUrl: './cadastrar-mensagem.component.html',
  styleUrls: ['./cadastrar-mensagem.component.scss']
})
export class CadastrarMensagemComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.montarFormulario();
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
      telefone: [null, [Validators.required]],
      whatsapp: [null, [Validators.required]]
    });
  }
}
