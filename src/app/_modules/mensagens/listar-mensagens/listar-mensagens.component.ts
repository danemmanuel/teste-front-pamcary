import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/_shared/snack-bar/snack-bar.service';

@Component({
  selector: 'app-listar-mensagens',
  templateUrl: './listar-mensagens.component.html',
  styleUrls: ['./listar-mensagens.component.scss']
})
export class ListarMensagensComponent implements OnInit {
  hoje = new Date();
  mensagens = [];
  mensagemSelecionada: any;
  constructor(private _snackService: SnackBarService) {}

  ngOnInit() {
    this.buscarMensagens();
  }

  buscarMensagens() {
    this.mensagens = [
      {
        id: 1,
        titulo: 'Mensagem 1',
        assunto: 'Assunto 1',
        data_cadastro: new Date(),
        conteudo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 2,
        titulo: 'Mensagem 2',
        assunto: 'Assunto 2',
        data_cadastro: new Date(),
        conteudo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        id: 3,
        titulo: 'Mensagem 3',
        assunto: 'Assunto 3',
        data_cadastro: new Date(),
        conteudo:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ];
  }
  selecionarMensagem(mensagem) {
    this.mensagemSelecionada = mensagem;
  }

  excluirMensagem(mensagem) {
    this.mensagens = this.mensagens.filter(msg => {
      return msg.id !== mensagem.id;
    });
    this.mensagemSelecionada = null;
    this._snackService.exibirFeedBackSucesso(
      `Mensagem '${mensagem.titulo}' Excluída com Sucesso!`
    );
  }
}
