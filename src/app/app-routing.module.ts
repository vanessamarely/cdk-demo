import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  { path: 'stepper', component: StepperComponent },
  { path: 'draganddrop', component: DragdropComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
