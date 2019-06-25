import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/_shared/snack-bar/snack-bar.service';
import { MensagensService } from '../mensagens.service';

@Component({
  selector: 'app-listar-mensagens',
  templateUrl: './listar-mensagens.component.html',
  styleUrls: ['./listar-mensagens.component.scss']
})
export class ListarMensagensComponent implements OnInit {
  hoje = new Date();
  mensagens = [];
  mensagemSelecionada: any;
  constructor(
    private _mensagensService: MensagensService,
    private _snackService: SnackBarService
  ) {}

  ngOnInit() {
    this.buscarMensagens();
  }

  buscarMensagens() {
    this._mensagensService.buscarMensagens().subscribe(mensagens => {
      this.mensagens = mensagens;
    });
  }
  selecionarMensagem(mensagem) {
    this.mensagemSelecionada = mensagem;
  }

  excluirMensagem(mensagem) {
    this._mensagensService.excluirMensagem(mensagem._id).subscribe(() => {
      this.mensagemSelecionada = null;
      this._snackService.exibirFeedBackSucesso(
        `Mensagem de '${mensagem.nome}' Excluída com Sucesso!`
      );
      this.buscarMensagens();
    });
  }
}
