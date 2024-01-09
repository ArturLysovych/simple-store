import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent implements OnInit {
  constructor(public errorService: ErrorService) {
  
  }
  ngOnInit(): void {
    
  }
}
