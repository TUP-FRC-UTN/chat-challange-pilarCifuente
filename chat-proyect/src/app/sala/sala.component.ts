import { Component } from '@angular/core';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [UsuariosComponent, CommonModule],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: { usuario: string, texto: string }[] = [];

  actualizarConversacion(mensaje: { usuario: string, texto: string }) {
    this.mensajes.push(mensaje);
  }
}
