import {EventEmitter, Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VariablesFormService {

  constructor() {
  }

  onFormSubmitted = new EventEmitter<any>();
  onFormVRP2Submitted = new EventEmitter<any>();

}
