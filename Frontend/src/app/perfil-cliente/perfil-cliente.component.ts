import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { datosModel, perfilModel, reservasmodel } from '../Shared/usuario.model';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit{
  datos: Observable <perfilModel[]> | undefined
  reservas: reservasmodel[] = [];
  constructor (private router:Router, private usuarioService: UsuarioService) {}
  urlimagen=this.usuarioService.apiUrl+"/imagenes/"
  ngOnInit(): void {
    const correo = this.usuarioService.obtenercorreo()
    if (correo) {
      this.datos = this.usuarioService.obtenerusuarioid(correo)
    }
    this.usuarioService.getReservas().subscribe(reservas => {
      this.reservas = reservas;
    });
  }
  cerrarsesion() {
    sessionStorage.clear();
    this.router.navigate(['/bienvenido']); // Navegar a la página de inicio

    // Reemplazar la URL actual en el historial del navegador
    window.history.replaceState(null, '', window.location.origin + '/bienvenido');

    // Eliminar las entradas del historial del navegador
    window.history.go(-(window.history.length - 1));

    // Agregar un listener para el evento popstate para manejar la navegación hacia atrás
    window.addEventListener('popstate', function (event) {
        // Restaurar la URL actual en el historial del navegador
        window.history.pushState(null, '', window.location.origin + '/bienvenido');
    });
}
  
}
