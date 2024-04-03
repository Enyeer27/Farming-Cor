import { Component } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { datosModel, perfilModel, pesosmodel, productoconpesomodel } from '../Shared/usuario.model';

@Component({
  selector: 'app-pag-prin-cliente',
  templateUrl: './pag-prin-cliente.component.html',
  styleUrls: ['./pag-prin-cliente.component.css']
})
export class PagPrinClienteComponent {
  datos: Observable<perfilModel[]> | undefined
  producto: Observable<productoconpesomodel[]> | undefined
  peso: any
  searchText: string = '';
  productosFiltrados: productoconpesomodel[] = [];
  filtroSeleccionado: string = 'frutas'; // Valor predeterminado

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  urlimagen = this.usuarioService.apiUrl + "/imagenes/"
  urlimagenp = this.usuarioService.apiUrl + "/productos/"

  ngOnInit(): void {
    const correo = this.usuarioService.obtenercorreo();
    if (correo) {
      this.datos = this.usuarioService.obtenerusuarioid(correo);
    }
    this.producto = this.usuarioService.mostrarproducto();
    this.producto.subscribe(productos => {
      // Filtro inicial al cargar la página
      this.productosFiltrados = this.filtrarProductos(productos, this.filtroSeleccionado);
    });
  }

  verProducto(idProducto: string) {
    this.router.navigate(['/detalle-producto', idProducto]); // Utiliza el ID del producto para la navegación
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


/* filtrarProductos(event: Event) {
    const tipo = (event.target as HTMLSelectElement).value;
    if (tipo === 'frutas') {
      this.dato = this.dataService.getProducto()
      // this.dataService.getProducto().subscribe((data) => this.dato = data);
    } else if (tipo === 'verduras') {
      this.dato = this.dataService.getProducto()
      // this.dataService.getProducto().subscribe((data) => this.dato = data);
    } else {
      this.obtenerDatos();
    }
  }*/

  filtrarProductos(productos: productoconpesomodel[], filtro: string): productoconpesomodel[] {
    if (filtro === '1') {
        return productos.filter(producto => producto.Id_Categoria === '1');
    } else if (filtro === '2') {
        return productos.filter(producto => producto.Id_Categoria === '2');
    } else {
        return productos; // Si no se selecciona nada, mostrar todos los productos
    }
}


  // Método invocado al cambiar la opción seleccionada en el dropdown
  onSelectFiltro(event: any) {
    this.filtroSeleccionado = event.target.value;
    this.producto?.subscribe(productos => {
      this.productosFiltrados = this.filtrarProductos(productos, this.filtroSeleccionado);
    });
  }
}
