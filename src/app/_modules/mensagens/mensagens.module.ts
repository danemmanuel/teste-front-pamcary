import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensRoutingModule } from './mensagens.routing.module';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';

@NgModule({
  imports: [CommonModule, MensagensRoutingModule],
  declarations: [CadastrarMensagemComponent]
})
export class MensagensModule {}
