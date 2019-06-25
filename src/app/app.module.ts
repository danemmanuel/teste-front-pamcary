import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopMenuComponent } from './_core/top-menu/top-menu.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './_shared/angular-material/angular-material.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MAT_DATE_LOCALE } from '@angular/material';
import { SnackBarComponent } from 'src/app/_shared/snack-bar/snack-bar.component';
import { DialogComponent } from './_shared/dialog/dialog.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    SnackBarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [SnackBarComponent, DialogComponent]
})
export class AppModule {}
