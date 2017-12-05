import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List!';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'carts';
  products: IProduct[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'Mar 18, 2016',
      description: '15 gal capacity',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://openclipart.org/download/58471/garden-cart.svg'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'curved claw steel hammer',
      price: 19.99,
      starRating: 4.8,
      // tslint:disable-next-line:max-line-length
      imageUrl: 'https://openclipart.org/download/193438/freehammer.svg'
    }
  ];
  constructor() {}

  ngOnInit() {}

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
