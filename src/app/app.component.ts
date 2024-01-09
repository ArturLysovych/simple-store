import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/product';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
