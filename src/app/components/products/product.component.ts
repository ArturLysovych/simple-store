import { Component, Input } from "@angular/core";
import { IProduct } from "../../interfaces/product";

@Component({
    selector: 'app-product',
    templateUrl : './product.component.html'
})
export class ProductComponent {
    @Input() product: IProduct

    details:boolean = false
}