import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatCardModule,
  MatRippleModule,
  MatProgressBarModule
} from '@angular/material';

@NgModule({
  imports: [
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatRippleModule,
    MatProgressBarModule
  ],
  exports: [
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatRippleModule,
    MatProgressBarModule
  ],

  declarations: []
})
export class AngularMaterialModule {}
