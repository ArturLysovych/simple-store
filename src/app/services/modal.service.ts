import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  inVisible$ = new BehaviorSubject<boolean>(true)

  open() {
    this.inVisible$.next(true);
  }

  close() {
    this.inVisible$.next(false);
  }

  constructor() { }
}
