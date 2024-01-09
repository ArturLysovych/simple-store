import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    return products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
  }

}
