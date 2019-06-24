import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMensagemComponent } from './cadastrar-mensagem/cadastrar-mensagem.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarMensagemComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MensagensRoutingModule {}
