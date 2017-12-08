import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;

  // dependency injection of ProductService (a short hand way)
  constructor(private _productService: ProductService) {
    this.filteredProducts = this.products;
    this.listFilter = '';
  }

  _listFilter: string;

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  // try not to instantiate stuff on constructor.
  // make constructor as fast as possible and use lifecycle hooks instead
  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    }, error => (this.errorMessage = <any>error));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();

    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onNotify(message: string) {
    this.pageTitle = message;
  }
}
