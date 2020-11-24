import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VariablesFormService {

  constructor() { }

  onFormSubmitted = new EventEmitter<any>();

}
