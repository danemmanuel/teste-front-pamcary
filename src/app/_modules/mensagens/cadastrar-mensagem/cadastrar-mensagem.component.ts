import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SnackBarService } from 'src/app/_shared/snack-bar/snack-bar.service';
import { MensagensService } from '../mensagens.service';

@Component({
  selector: 'app-cadastrar-mensagem',
  templateUrl: './cadastrar-mensagem.component.html',
  styleUrls: ['./cadastrar-mensagem.component.scss']
})
export class CadastrarMensagemComponent implements OnInit {
  formulario: FormGroup;
  assuntos = [];
  submitted: boolean;
  constructor(
    private _mensagensService: MensagensService,
    private formBuilder: FormBuilder,
    private _snackService: SnackBarService
  ) {}

  ngOnInit() {
    this.buscarAssuntos();
    this.montarFormulario();
  }

  async buscarAssuntos() {
    this.assuntos = await this._mensagensService.buscarAssuntos().toPromise();
  }

  montarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]+')]],
      email: [null, [Validators.required, Validators.email]],
      telefone: [null],
      assunto: [null, [Validators.required]],
      mensagem: [null, [Validators.required]]
    });
  }

  submitFormulario() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    }
    this._mensagensService
      .cadastrarMensagem(this.formulario.value)
      .subscribe(mensagem => {
        this._snackService.exibirFeedBackSucesso(
          `Mensagem Cadastrada com Sucesso!`
        );
        this.formulario.reset();
        this.submitted = false;
      });
  }
}
