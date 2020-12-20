import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncAwaitComponent } from './async-await/async-await.component';
import { HomeComponent } from './includes/home/home.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebouncetimeComponent } from './observable/debouncetime/debouncetime.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatComponent } from './observable/concat/concat.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'promise',component: PromiseComponent},
  {
    path:'observable',component: ObservableComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'fromEvent', component: FromEventComponent},
      {path: 'interval', component: IntervalComponent},
      {path: 'of-from', component: OfFromComponent},
      {path: 'to-array', component: ToArrayComponent},
      {path: 'custom', component: CustomComponent},
      {path: 'map', component: MapComponent},
      {path: 'pluck', component: PluckComponent},
      {path: 'filter', component: FilterComponent},
      {path: 'tap', component: TapComponent},
      {path: 'take', component: TakeComponent},
      {path: 'retry', component: RetryComponent},
      {path: 'debouncetime', component: DebouncetimeComponent},
      {path: 'subject', component: SubjectComponent},
      {path: 'replay-subject', component: ReplaySubjectComponent},
      {path: 'async-subject', component: AsyncSubjectComponent},
      {path: 'concat', component: ConcatComponent},
      {path: 'merge', component: MergeComponent},
      {path: 'merge-map', component: MergeMapComponent},
      {path: 'concat-map', component: ConcatMapComponent},
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
