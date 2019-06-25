import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagensRoutingModule } from './mensagens.routing.module';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';
import { ListarMensagensComponent } from './listar-mensagens/listar-mensagens.component';
import { AngularMaterialModule } from 'src/app/_shared/angular-material/angular-material.module';
import { DetalhesMensagemComponent } from './listar-mensagens/detalhes-mensagem/detalhes-mensagem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    MensagensRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CadastrarMensagemComponent,
    ListarMensagensComponent,
    DetalhesMensagemComponent
  ]
})
export class MensagensModule {}
