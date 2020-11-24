import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  onRunDijkstra = new EventEmitter<any>();
  onRunDijkstraFibo = new EventEmitter<any>();
  onRunAstar = new EventEmitter<any>();

  constructor(private httpClient: HttpClient) { }

  runDijkstra(dmax: number, popmin: number, srcVertex: number, endVertex: number){
    return this.httpClient.get<any[]>('http://localhost:8080/api/dijkstra/' + dmax + '/' + popmin + '/' + srcVertex + '/' + endVertex);
  }

  runDijkstraFibo(dmax: number, popmin: number, srcVertex: number, endVertex: number){
    return this.httpClient.get<any[]>('http://localhost:8080/api/dijkstraFibo/' + dmax + '/' + popmin + '/' + srcVertex + '/' + endVertex);
  }

  runAstar(dmax: number, popmin: number, srcVertex: number, endVertex: number){
    return this.httpClient.get<any[]>('http://localhost:8080/api/astar/' + dmax + '/' + popmin + '/' + srcVertex + '/' + endVertex);
  }

  runVrp1(){
    return this.httpClient.get<any[]>('http://localhost:8080/api/vrp1');
  }

  createFile(dmax: number, popmin: number){
    return this.httpClient.get<any[]>('http://localhost:8080/api/createFile/' + dmax + '/' + popmin);
  }
}
