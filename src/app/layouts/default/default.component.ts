import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  title = 'Comparaison des algorithmes';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      // see also
      if (val instanceof NavigationEnd){
        switch (val.url){
          case '/vrp1':
            this.title = 'Exercice du 1er VRP';
            break;
          case '/vrp2':
            this.title = 'Exercice du 2ème VRP';
            break;
          default:
            this.title = 'Comparaison des algorithmes';
            break;
        }
      }
    });
  }

}
