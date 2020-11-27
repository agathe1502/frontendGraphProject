import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DefaultModule} from './layouts/default/default.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Vrp2FormComponent} from './pages/components/vrp2-form/vrp2-form.component';
import { Vrp2PageComponent } from './pages/vrp2-page/vrp2-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AgmCoreModule} from "@agm/core";
import {NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    Vrp2FormComponent,
    Vrp2PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DefaultModule,
    ReactiveFormsModule,
    AgmCoreModule,
    NgbTypeaheadModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
