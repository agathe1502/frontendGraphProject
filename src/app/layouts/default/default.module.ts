import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HighchartsChartModule} from 'highcharts-angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {NavbarComponent} from '../../pages/shared/navbar/navbar.component';
import {VariablesFormComponent} from '../../pages/components/variables-form/variables-form.component';
import {AlgorithmChartComponent} from '../../pages/components/algorithm-chart/algorithm-chart.component';
import {Vrp1PageComponent} from '../../pages/vrp1-page/vrp1-page.component';
import {FooterComponent} from '../../pages/shared/footer/footer.component';
import {DefaultComponent} from './default.component';
import {AlgorithmService} from '../../services/algorithm.service';
import {VariablesFormService} from '../../services/variables-form.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    NavbarComponent,
    VariablesFormComponent,
    AlgorithmChartComponent,
    Vrp1PageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCMX6ZOOIfveJn40L_lSJbFmPhkC5zWBjo'
    }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    NgbModule
  ],
  providers: [
    AlgorithmService,
    VariablesFormService
  ],
})
export class DefaultModule {
}
