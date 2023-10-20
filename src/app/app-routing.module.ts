import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  {
    path: 'application',
    loadChildren: () => import('./application/application.module').then((m) => m.ApplicationModule)
  },
  {
    path: '',
    redirectTo: 'application',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NopagefoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
