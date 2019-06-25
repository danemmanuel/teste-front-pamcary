import { Injectable } from '@angular/core';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';
import { SnackBarComponent } from './snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar) {}

  exibirFeedBackSucesso(msg) {
    const config = new MatSnackBarConfig();
    config.duration = 5000;
    config.panelClass = ['green-snackbar'];
    config.data = {
      mensagem: msg
    };
    this.snackBar.openFromComponent(SnackBarComponent, config);
  }
}
