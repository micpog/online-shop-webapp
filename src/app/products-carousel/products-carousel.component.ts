import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent implements OnInit {
  itemsPerSlide = 3;
  products: Product[] = [
    { imageAddress: 'https://picsum.photos/id/1/200/300', name: 'Product 1', description: 'Test', type: 'Type'},
    { imageAddress: 'https://picsum.photos/id/2/200/300', name: 'Product 1', description: 'Test', type: 'Type'},
    { imageAddress: 'https://picsum.photos/id/3/200/300', name: 'Product 1', description: 'Test', type: 'Type'},
    { imageAddress: 'https://picsum.photos/id/4/200/300', name: 'Product 1', description: 'Test', type: 'Type'},
    { imageAddress: 'https://picsum.photos/id/5/200/300', name: 'Product 1', description: 'Test', type: 'Type'},
  ];

  constructor() {
    this.products = this.takeRandomProducts(3);
   }

  takeRandomProducts(numberOfItems: number){
    var randoms: Product[] = []
    
    for (var i = 0; i < numberOfItems; i++){
      var product = this.products[Math.floor(Math.random() * this.products.length)]
      if (randoms.includes(product)) {
        continue;
      }

      randoms.push(product);
    }

    return randoms;
  }

  ngOnInit() {
  }

}
