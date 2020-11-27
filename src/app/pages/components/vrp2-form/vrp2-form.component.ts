import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AlgorithmService} from "../../../services/algorithm.service";
import {VariablesFormService} from "../../../services/variables-form.service";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {merge, Observable, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map} from "rxjs/operators";

@Component({
  selector: 'app-vrp2-form',
  templateUrl: './vrp2-form.component.html',
  styleUrls: ['./vrp2-form.component.css']
})
export class Vrp2FormComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService,
              private variablesFormService: VariablesFormService,
              private formBuilder: FormBuilder) {
  }

  variablesForm: FormGroup;
  vertices = null;


  formatter = (x: { name: string }) => x.name;

  @ViewChild('instance1', {static: true}) instance1: NgbTypeahead;
  focus1$ = new Subject<string>();
  click1$ = new Subject<string>();

  search1 = (text$: Observable<string>) => {
    const debouncedText1$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup1$ = this.click1$.pipe(filter(() => !this.instance1.isPopupOpen()));
    const inputFocus1$ = this.focus1$;

    return merge(debouncedText1$, inputFocus1$, clicksWithClosedPopup1$).pipe(
      map(term => (term === '' ? this.vertices
        : this.vertices.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  ngOnInit(): void {
    this.initForm();
    this.onChangePopmin('100000');
  }

  initForm() {
    this.variablesForm = this.formBuilder.group({
      popmin: [100000, Validators.required],
      // initialisées à 0 pour pouvoir créer le fichier
      srcVertex: ['0', Validators.required],
    });
  }

  onRunAlgorithm() {
    // previent qu'il faut lancer l'algorithme
    return this.variablesFormService.onFormVRP2Submitted.emit(this.variablesForm.value);
  }

  onChangePopmin(value){
    switch (value){
      case '150000' :
        this.vertices = [
          {
            id: 0,
            name: 'Nice'
          },
          {
            id: 1,
            name: 'Marseille'
          },
          {
            id: 2,
            name: 'Dijon'
          },
          {
            id: 3,
            name: 'Toulouse'
          },
          {
            id: 4,
            name: 'Bordeaux'
          },
          {
            id: 5,
            name: 'Montpellier'
          },
          {
            id: 6,
            name: 'Rennes'
          },
          {
            id: 7,
            name: 'Grenoble'
          },
          {
            id: 8,
            name: 'Saint-Etienne'
          },
          {
            id: 9,
            name: 'Nantes'
          },
          {
            id: 10,
            name: 'Reims'
          },
          {
            id: 11,
            name: 'Lille'
          },
          {
            id: 12,
            name: 'Strasbourg'
          },
          {
            id: 13,
            name: 'Lyon'
          },
          {
            id: 14,
            name: 'Paris'
          },
          {
            id: 15,
            name: 'Havre'
          },
          {
            id: 16,
            name: 'Toulon'
          },
        ]
        break;
      case '200000':
        this.vertices = [
          {
            id: 0,
            name: 'Nice'
          },
          {
            id: 1,
            name: 'Marseille'
          },
          {
            id: 2,
            name: 'Toulouse'
          },
          {
            id: 3,
            name: 'Bordeaux'
          },
          {
            id: 4,
            name: 'Montpellier'
          },
          {
            id: 5,
            name: 'Rennes'
          },
          {
            id: 6,
            name: 'Nantes'
          },
          {
            id: 7,
            name: 'Lille'
          },
          {
            id: 8,
            name: 'Strasbourg'
          },
          {
            id: 9,
            name: 'Lyon'
          },
          {
            id: 10,
            name: 'Paris'
          },
        ]
        break;
      default:
        this.vertices = [
          {
            id: 0,
            name: 'Nice'
          },
          {
            id: 1,
            name: 'Aix-en-provence'
          },
          {
            id: 2,
            name: 'Marseille'
          },
          {
            id: 3,
            name: 'Caen'
          },
          {
            id: 4,
            name: 'Dijon'
          },
          {
            id: 5,
            name: 'Besançon'
          },
          {
            id: 6,
            name: 'Brest'
          },
          {
            id: 7,
            name: 'Nîmes'
          },
          {
            id: 8,
            name: 'Toulouse'
          },
          {
            id: 9,
            name: 'Bordeaux'
          },
          {
            id: 10,
            name: 'Montpellier'
          },
          {
            id: 11,
            name: 'Rennes'
          },
          {
            id: 12,
            name: 'Tours'
          },
          {
            id: 13,
            name: 'Grenoble'
          },
          {
            id: 14,
            name: 'Saint-Etienne'
          },
          {
            id: 15,
            name: 'Nantes'
          },
          {
            id: 16,
            name: 'Orléans'
          },
          {
            id: 17,
            name: 'Angers'
          },
          {
            id: 18,
            name: 'Reims'
          },
          {
            id: 19,
            name: 'Nancy'
          },
          {
            id: 20,
            name: 'Metz'
          },
          {
            id: 21,
            name: 'Lille'
          },
          {
            id: 22,
            name: 'Clermont-Ferrand'
          },
          {
            id: 23,
            name: 'Perpignan'
          },
          {
            id: 24,
            name: 'Strasbourg'
          },
          {
            id: 25,
            name: 'Mulhouse'
          },
          {
            id: 26,
            name: 'Lyon'
          },
          {
            id: 27,
            name: 'Villeurbanne'
          },
          {
            id: 28,
            name: 'Le Mans'
          },
          {
            id: 29,
            name: 'Paris'
          },
          {
            id: 30,
            name: 'Rouen'
          },
          {
            id: 31,
            name: 'Havre'
          },
          {
            id: 32,
            name: 'Amiens'
          },
          {
            id: 33,
            name: 'Toulon'
          },
          {
            id: 34,
            name: 'Limoges'
          },
          {
            id: 35,
            name: 'Boulogne Billancourt'
          },
          {
            id: 36,
            name: 'Montreuil'
          },
          {
            id: 37,
            name: 'Saint Denis'
          },
          {
            id: 38,
            name: 'Argenteuil'
          },
        ]
        break;
    }
  }

}
