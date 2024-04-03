import { Component } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-prin-admin',
  templateUrl: './pag-prin-admin.component.html',
  styleUrls: ['./pag-prin-admin.component.css']
})
export class PagPrinAdminComponent {
  constructor (private router:Router, private usuarioService: UsuarioService) {}
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


