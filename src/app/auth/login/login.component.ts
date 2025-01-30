import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);

      // Lógica para manejar la autenticación aquí
      alert('Inicio de sesión exitoso');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }
}
