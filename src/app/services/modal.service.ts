import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  inVisible$ = new BehaviorSubject<boolean>(false)

  open() {
    this.inVisible$.next(true);
  }

  close() {
    this.inVisible$.next(false);
  }

  constructor() { }
}
