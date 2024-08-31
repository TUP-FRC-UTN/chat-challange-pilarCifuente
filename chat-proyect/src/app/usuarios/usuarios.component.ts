import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  @Output() mensajeEnviado = new EventEmitter<{ usuario: string, texto: string }>();

  enviarMensaje(usuario: string, textarea: HTMLTextAreaElement) {
      // trim() elimina espacios en blanco de ambos extremos de una cadena de texto
    const texto = textarea.value.trim();

    if (texto) {
      this.mensajeEnviado.emit({ usuario, texto });
      textarea.value = ''; 
    }
  }
}
