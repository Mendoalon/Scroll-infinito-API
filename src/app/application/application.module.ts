import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListCardComponent } from './pages/list-card/list-card.component';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    CardComponent,

    ListCardComponent,
    DetailCardComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule
  ]
})
export class ApplicationModule { }
