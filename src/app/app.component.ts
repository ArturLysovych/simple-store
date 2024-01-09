import { Component, OnInit } from '@angular/core';
import { IProduct } from './interfaces/product';
import { ProductsService } from './services/products.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'simple store';
  // products: IProduct[] = [];
  loading = false;
  products$: Observable<IProduct[]>
  term = ''

  constructor(private productsService: ProductsService) {

  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsService.getAll().pipe(
      tap(() => { this.loading = false })
    );
    // this.productsService.getAll().subscribe((products) => {
    //   this.products = products;
    //   this.loading = false;
    // })
  }
}
