import {Component, OnInit} from '@angular/core';
import {AlgorithmService} from '../../services/algorithm.service';

@Component({
  selector: 'app-vrp1-page',
  templateUrl: './vrp1-page.component.html',
  styleUrls: ['./vrp1-page.component.css']
})
export class Vrp1PageComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService) {
  }

  lat = 46.7333;
  lng = 2.616767;

  bigCities: [] = [];
  averages: number[] = [];
  cityToLive = null;
  average: number = null;


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
  }

  onRunSimulation() {
    this.algorithmService.runVrp1().subscribe(
      response => {
        this.average = response['average'];
        this.averages = response['averages'];
        this.bigCities = response['bigCities'];
        this.cityToLive = response['cityToLive'];
      }
    );
  }

}
