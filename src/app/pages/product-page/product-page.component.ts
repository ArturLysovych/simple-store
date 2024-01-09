import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  title = 'simple store';
  // products: IProduct[] = [];
  loading = false;
  // products$: Observable<IProduct[]>
  term = ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService  
  ) {

  }

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => { this.loading = false })
    // );
    this.productsService.getAll().subscribe(() => {
      this.loading = false;
    })
  }
}
