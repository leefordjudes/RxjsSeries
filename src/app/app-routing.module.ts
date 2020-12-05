import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { HomeComponent } from './includes/home/home.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'promise',component: PromiseComponent},
  {
    path:'observable',component: ObservableComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'fromEvent', component: FromEventComponent},
    ],
  },
  {path:'async-await',component: AsyncAwaitComponent},
  {path:'**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
