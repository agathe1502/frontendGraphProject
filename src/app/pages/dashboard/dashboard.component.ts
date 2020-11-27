import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {VariablesFormService} from '../../services/variables-form.service';
import {AlgorithmService} from '../../services/algorithm.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(private httpClient: HttpClient,
              private variablesFormService: VariablesFormService,
              private algorithmService: AlgorithmService) {
  }

  lat = 46.7333;
  lng = 2.616767;
  markers = [];
  dijkstra = null;
  dijkstraFibo = null;
  distance = null;
  astar = null;


  countryRestriction = {
    latLngBounds: {
      east: 15.49234,
      north: 51.50,
      south: 42.00,
      west: -10.000
    },
    strictBounds: true,
  };

  errorInfinity = false;


  ngOnInit() {
    this.variablesFormService.onFormSubmitted.subscribe((formData: any) => {
      for (let i = 1; i <= 5; i++) {
        {
          this.onRunAlgorithms(formData);
        }
      }
    });
  }

  onRunAlgorithms(formData: any) {
    const dmax = formData['dmax'];
    const popmin = formData['popmin'];
    const srcVertex = formData['srcVertex']['id'];
    const endVertex = formData['endVertex']['id'];
    this.algorithmService.runDijkstra(dmax, popmin, srcVertex, endVertex).subscribe(
      response => {
        this.algorithmService.onRunDijkstra.emit(response['time']);
        this.markers = response['path'];
        this.distance = response["distance"];
        this.dijkstra = {
          time: response["time"],
        };
      }, error => {
        this.reset();
        this.errorInfinity = true;
      }
    );
    this.algorithmService.runDijkstraFibo(dmax, popmin, srcVertex, endVertex).subscribe(
      response => {
        this.algorithmService.onRunDijkstraFibo.emit(response['time']);
        this.dijkstraFibo = {
          distance: response["distance"],
          time: response["time"],
        };
      }
    );
    this.algorithmService.runAstar(dmax, popmin, srcVertex, endVertex).subscribe(
      response => {
        this.algorithmService.onRunAstar.emit(response['time']);
        this.astar = {
          time: response["time"],
        };
      }
    );

  }

  reset() {
    this.errorInfinity = false;
    this.markers = [];
    this.dijkstra = null;
    this.dijkstraFibo = null;
    this.distance = null;
    this.astar = null;
  }


}
