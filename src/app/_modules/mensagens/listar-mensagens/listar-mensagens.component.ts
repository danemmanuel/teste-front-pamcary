import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/_shared/snack-bar/snack-bar.service';
import { MensagensService } from '../mensagens.service';
import { Mensagem } from 'src/app/_shared/models/Mensagem';

@Component({
  selector: 'app-listar-mensagens',
  templateUrl: './listar-mensagens.component.html',
  styleUrls: ['./listar-mensagens.component.scss']
})
export class ListarMensagensComponent implements OnInit {
  hoje = new Date();
  mensagens: Mensagem[];
  mensagemSelecionada: Mensagem;

  constructor(
    private _mensagensService: MensagensService,
    private _snackService: SnackBarService
  ) {}

  ngOnInit() {
    this.buscarMensagens();
  }

  async buscarMensagens() {
    this.mensagens = await this._mensagensService.buscarMensagens().toPromise();
  }

  selecionarMensagem(mensagem: Mensagem) {
    this.mensagemSelecionada = mensagem;
  }

  excluirMensagem(mensagem: Mensagem) {
    this._mensagensService.excluirMensagem(mensagem._id).subscribe(() => {
      this.mensagemSelecionada = null;
      this._snackService.exibirFeedBackSucesso(
        `Mensagem de '${mensagem.nome}' Excluída com Sucesso!`
      );
      this.buscarMensagens();
    });
  }
}
