import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {Vrp1PageComponent} from './pages/vrp1-page/vrp1-page.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'vrp1',
    component: Vrp1PageComponent
  }, {
    path: 'vrp2',
    component: Vrp1PageComponent
  },
    {
      path: 'dashboard',
      redirectTo: ''
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
