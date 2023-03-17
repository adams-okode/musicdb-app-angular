import { Injectable } from '@angular/core';
import { IResult } from '@deezer/interfaces/index';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  results = new BehaviorSubject<Array<IResult>>([]);

  constructor() {}
}
