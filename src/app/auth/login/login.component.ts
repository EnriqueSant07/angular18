import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../shared/service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  credentials = { email: '', password: '' };

  constructor(private auth: AuthService) {}

  onSubmit() {
    this.auth.loginUser(this.credentials);
  }

  presioname() {
    this.auth.getUsers().subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
