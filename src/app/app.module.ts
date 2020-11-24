import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import {AgmCoreModule} from '@agm/core';
import {HttpClientModule} from '@angular/common/http';
import {VariablesFormComponent} from './pages/components/variables-form/variables-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlgorithmService} from './services/algorithm.service';
import {VariablesFormService} from './services/variables-form.service';
import {HighchartsChartModule} from 'highcharts-angular';
import { AlgorithmChartComponent } from './pages/components/algorithm-chart/algorithm-chart.component';
import { Vrp1PageComponent } from './pages/vrp1-page/vrp1-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { DefaultComponent } from './layouts/default/default.component';
import {AppRoutingModule} from './app-routing.module';
import {DefaultModule} from './layouts/default/default.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
