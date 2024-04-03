import { Component } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Definir propiedades para cada campo del formulario
  nombre1: string = '';
  nombre2: string = '';
  apellido1: string = '';
  apellido2: string = '';
  tipodoc: string = '';
  Num_Doc: string = '';
  correo: string = '';
  tel: string = '';
  direccion: string = '';
  local: string = '';
  usuario: string = '';
  rol: string = '';
  password: string = '';
  estado: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registrarUsuario() {
    // Utilizar las propiedades del componente para recopilar datos del formulario

    // Validar el formato del correo electrónico
    if (!this.validarCorreo(this.correo)) {
      alert('Por favor ingrese un correo electrónico válido');
      return; // Detener el proceso de registro si el correo no es válido
    }
    // Validar que la contraseña tenga al menos 8 caracteres
    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres');
      return; // Detener el proceso de registro si la contraseña no cumple con el requisito
    }

    const usuario = {
      nombre1: this.nombre1,
      nombre2: this.nombre2,
      apellido1: this.apellido1,
      apellido2: this.apellido2,
      tipodoc: this.tipodoc,
      Num_Doc: this.Num_Doc,
      correo: this.correo,
      usuario: this.usuario,
      direccion: this.direccion,
      local: this.local,
      rol: this.rol,
      password: this.password,
      estado: this.estado
    };

    this.usuarioService.registrarUsuario(usuario).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente:', response);

        // Alerta sencilla
        alert('Usuario registrado exitosamente');

        this.router.navigate(['/iniciar-sesion']); 
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert('Complete los campos de los datos');
      }
    );
  }

  validarCorreo(correo: string): boolean {
    // Expresión regular para validar el formato del correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validar el correo con la expresión regular
    return regexCorreo.test(correo);
  }

  obligatorio(): boolean {
    if (this.rol === '2') {
      return (
        this.Num_Doc !== '' &&
        this.nombre1 !== '' &&
        this.apellido1 !== '' &&
        this.correo !== '' &&
        this.password !== '' &&
        this.usuario !== '' &&
        this.direccion !== '' &&
        this.local !== ''
      );
    } else if (this.rol === '3') {
      return (
        this.Num_Doc !== '' &&
        this.nombre1 !== '' &&
        this.apellido1 !== '' &&
        this.correo !== '' &&
        this.password !== '' &&
        this.usuario !== ''
      );
    } else {
      return false; 
    }
  }
}
