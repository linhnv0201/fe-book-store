import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLogin = true;

  formData: any = {
    email: '',
    password: '',
    fullname: '',
    phone: '',
    address: ''
  };

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.formData = {
      email: '',
      password: '',
      fullname: '',
      phone: '',
      address: ''
    };
  }

  onSubmit() {
    if (this.isLogin) {
      console.log('Login data:', {
        email: this.formData.email,
        password: this.formData.password
      });
    } else {
      console.log('Register data:', this.formData);
    }
  }
}
