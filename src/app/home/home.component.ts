import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItem } from '../shared/types/productItem';
import {ProductItemComponent } from "../shared/product-item/productItem.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  products: ProductItem[] = [
    { id: 1, name: 'cuốn theo chiều gió', price: 120000, image: "assets/images/product1.jpg" },
    { id: 2, name: 'nhà giả kim', price: 120000, image: "assets/images/product1.jpg" },
    { id: 3, name: 'hai số phận', price: 120000, image: "assets/images/product1.jpg" },
    { id: 4, name: 'tôi là beto', price: 120000, image: "assets/images/product1.jpg" },
  ];

  isVisible: boolean = false;

  handleDelete = (id: number) => {
    console.log(id);
    const productIndex = this.products.findIndex(item => item.id == id);
    if (productIndex != -1){
      this.products.splice(productIndex, 1);
    }
  }
}
