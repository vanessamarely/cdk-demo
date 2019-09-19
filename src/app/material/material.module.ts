import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatStepperModule} from '@angular/material/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {ObserversModule} from '@angular/cdk/observers';
import {ScrollingModule} from '@angular/cdk/scrolling';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
@NgModule({
  exports: [
    CdkStepperModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatIconModule,
    DragDropModule,
    CdkTableModule,
    CdkTreeModule,
    ObserversModule,
    ScrollingModule
  ],
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
