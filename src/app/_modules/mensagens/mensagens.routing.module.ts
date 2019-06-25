import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';
import { ListarMensagensComponent } from './listar-mensagens/listar-mensagens.component';

const routes: Routes = [
  {
    path: 'mensagens/cadastrar',
    component: CadastrarMensagemComponent
  },
  {
    path: '',
    component: ListarMensagensComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensagensRoutingModule {}
