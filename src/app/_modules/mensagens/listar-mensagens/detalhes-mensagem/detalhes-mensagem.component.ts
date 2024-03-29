import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DialogComponent } from 'src/app/_shared/dialog/dialog.component';
import { MatDialog } from '@angular/material';
import { Mensagem } from 'src/app/_shared/models/Mensagem';

@Component({
  selector: 'app-detalhes-mensagem',
  templateUrl: './detalhes-mensagem.component.html',
  styleUrls: ['./detalhes-mensagem.component.scss']
})
export class DetalhesMensagemComponent {
  @Input() mensagemSelecionada: Mensagem;
  @Output() mensagemExcluida = new EventEmitter<Mensagem>();

  constructor(private dialog: MatDialog) {}
  excluirMensagem() {
    this.dialog
      .open(DialogComponent, {
        data: {
          titulo: 'Excluir Mensagem',
          conteudo: `Deseja realmente excluír a mensagem de '${
            this.mensagemSelecionada.nome
          }' ?`,
          txtBtn: 'Excluir'
        }
      })
      .afterClosed()
      .subscribe(confirmacao => {
        if (confirmacao) {
          this.mensagemExcluida.emit(this.mensagemSelecionada);
        }
      });
  }
}
