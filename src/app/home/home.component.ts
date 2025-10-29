import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { CurrencyPipe } from '../shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from '../shared/pipes/UpperCasePipe.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule, CurrencyPipe, UpperCasePipe, NgFor, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  products = [
    { id: 1, name: 'cuon theo chieu gio', price: 120000, image: "assets/images/product1.jpg" },
    { id: 2, name: 'sach2', price: 120000, image: "assets/images/product1.jpg" },
    { id: 3, name: 'sach3', price: 120000, image: "assets/images/product1.jpg" },
    { id: 4, name: 'sach4', price: 120000, image: "assets/images/product1.jpg" },
  ];

  isVisible: boolean = false;



  // //text
  // test = 'hello-world';
  // title = {
  //   name: "Linh",
  //   age: "23"
  // }

  // //properties
  // isDisable = true;

  // //attributes
  // contentImage = "Nhã Linh welcome";
  // nameBtn = "Thử ấn xem";
  // clickMeMessage = '';
  // bindingMessage = '';
  // handleClickMe(): void {
  //   this.clickMeMessage= "Suprise!!";
  // }

  // updateField(): void {
  //   console.log("hello console");
  // }

}
