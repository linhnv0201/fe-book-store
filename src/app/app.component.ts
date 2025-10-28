import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FooterLayoutComponent } from './shared/footer-layout/footer-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FooterLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {


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
