import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './_modules/mensagens/mensagens.module#MensagensModule'
  },
  {
    path: 'mensagens',
    loadChildren: './_modules/mensagens/mensagens.module#MensagensModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
