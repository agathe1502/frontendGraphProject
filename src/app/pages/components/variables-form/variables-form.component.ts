import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlgorithmService} from '../../../services/algorithm.service';
import {VariablesFormService} from '../../../services/variables-form.service';
import {merge, Observable, of, Subject} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, filter, map, switchMap, tap} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-variables-form',
  templateUrl: './variables-form.component.html',
  styleUrls: ['./variables-form.component.css']
})
export class VariablesFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private algorithmService: AlgorithmService,
              private variablesFormService: VariablesFormService,
  ) { }

  variablesForm: FormGroup;
  fileCreated = false;
  loading = false;
  vertices: any[] = [];

  formatter = (x: {name: string}) => x.name;

  @ViewChild('instance1', {static: true}) instance1: NgbTypeahead;
  focus1$ = new Subject<string>();
  click1$ = new Subject<string>();

  @ViewChild('instance2', {static: true}) instance2: NgbTypeahead;
  focus2$ = new Subject<string>();
  click2$ = new Subject<string>();

  search1 = (text$: Observable<string>) => {
    const debouncedText1$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup1$ = this.click1$.pipe(filter(() => !this.instance1.isPopupOpen()));
    const inputFocus1$ = this.focus1$;

    return merge(debouncedText1$, inputFocus1$, clicksWithClosedPopup1$).pipe(
      map(term => (term === '' ? this.vertices
        : this.vertices.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  search2 = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click2$.pipe(filter(() => !this.instance2.isPopupOpen()));
    const inputFocus$ = this.focus2$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.vertices
        : this.vertices.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.variablesForm = this.formBuilder.group({
      dmax: ['50', Validators.required],
      popmin: ['5000', Validators.required],
      // initialisées à 0 pour pouvoir créer le fichier
      srcVertex: ['0', Validators.required],
      endVertex: ['0', Validators.required],
    });
  }

  onRunAlgorithm() {
    if (!this.fileCreated ){
      this.loading = true;
      // Lancer la génération du fichier
      this.fileCreated = true;
      this.algorithmService.createFile(this.variablesForm.controls['dmax'].value, this.variablesForm.controls['popmin'].value )
        .subscribe( response => {
          this.loading = false;
          this.vertices = response;
        }
        );
      // pour ne pas pouvoir lancer l'algorithme alors que les villes sont vides
      this.variablesForm.controls['srcVertex'].reset('');
      this.variablesForm.controls['endVertex'].reset('');
    }
    else {
      // previent qu'il faut lancer les algorithmes
      return this.variablesFormService.onFormSubmitted.emit(this.variablesForm.value);
    }
  }
}
