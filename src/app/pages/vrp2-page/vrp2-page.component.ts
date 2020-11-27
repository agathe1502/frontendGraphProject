import { Component, OnInit } from '@angular/core';
import {VariablesFormService} from "../../services/variables-form.service";
import {AlgorithmService} from "../../services/algorithm.service";

@Component({
  selector: 'app-vrp2-page',
  templateUrl: './vrp2-page.component.html',
  styleUrls: ['./vrp2-page.component.css']
})
export class Vrp2PageComponent implements OnInit {

  constructor(private variablesFormService: VariablesFormService,
              private algorithmService: AlgorithmService) { };


  markers = [];
  markersFiltered = [];
  distance: number = null;
  time: number = null;
  city = null;
  lat = 46.7333;
  lng = 2.616767;
  countryRestriction = {
    latLngBounds: {
      east: 15.49234,
      north: 51.50,
      south: 42.00,
      west: -10.000
    },
    strictBounds: true,
  };

  ngOnInit(): void {
    this.variablesFormService.onFormVRP2Submitted.subscribe((formData: any) => {
      this.runVRP2(formData);
    });
  }

  runVRP2(formData){
    this.algorithmService.runVrp2(formData['popmin'], formData['srcVertex']['id']).subscribe(
      response => {
        this.markers = response['path'];
        this.city = this.markers[0];
        this.markersFiltered = this.markers.slice(1, this.markers.length-1);
        console.log(this.markersFiltered);
        this.time = response['time'];
        this.distance = response['distance'];
      }
    );
  }

}
