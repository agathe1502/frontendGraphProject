import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {AlgorithmService} from '../../../services/algorithm.service';

@Component({
  selector: 'app-algorithm-chart',
  templateUrl: './algorithm-chart.component.html',
  styleUrls: ['./algorithm-chart.component.css']
})
export class AlgorithmChartComponent implements OnInit {


  chartOptions = {};
  Highcharts = Highcharts;
  dijkstraTimes: number[] = [];
  dijkstraFiboTimes: number[] = [];
  astarTimes: number[] = [];
  titleColumns: string[] = [];

  constructor(private algorithmService: AlgorithmService) {
  }

  ngOnInit(): void {
    this.initChart();
    this.algorithmService.onRunDijkstraFibo.subscribe((time: number) => {
        this.getTimeDijkstraFibo(time)
      }
    );
    this.algorithmService.onRunDijkstra.subscribe((time: number) => {
      this.getTimeDijkstra(time);
    });
    this.algorithmService.onRunAstar.subscribe((time: number) => {
      this.getTimeAstar(time);
    });
  }

  initChart() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Comparaison des temps de simulation des algorithmes'
      },
      xAxis: {
        categories: this.titleColumns,
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Temps de simulation (ms)'
        }
      },
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Dijkstra',
        data: this.dijkstraTimes
      }, {
        name: 'Dijkstra avec tas de Fibonnaci',
        data: this.dijkstraFiboTimes
      }, {
        name: 'Astar',
        data: this.astarTimes
      }]
    };
  }

  private getTimeDijkstra(time: number) {
    this.dijkstraTimes.push(time);
  }


  private getTimeDijkstraFibo(time: number) {
    this.dijkstraFiboTimes.push(time);
  }

  private getTimeAstar(time: number) {
    this.astarTimes.push(time);
    switch (this.astarTimes.length) {
      case 1 :
        this.titleColumns.push('1ère simulation');
        break;
      default:
        this.titleColumns.push(this.astarTimes.length + 'ème simulation');
    }
    this.initChart();
  }
}
