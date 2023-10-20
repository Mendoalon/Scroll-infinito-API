import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';

const routes: Routes = [
  {
    path: '',
    component: ListCardComponent,
  },
  {
    path: 'card/:id',
    component: DetailCardComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }
