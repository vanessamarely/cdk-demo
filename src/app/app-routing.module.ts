import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { PlatformComponent } from './platform/platform.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';


const routes: Routes = [
  { path: 'stepper', component: StepperComponent },
  { path: 'draganddrop', component: DragdropComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'platform', component: PlatformComponent },
  { path: 'virtualscroll', component: VirtualScrollComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
