import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Observable } from 'rxjs';
import { datosModel } from '../Shared/usuario.model';

@Component({
  selector: 'app-registrados',
  templateUrl: './registrados.component.html',
  styleUrls: ['./registrados.component.css']
})
export class RegistradosComponent implements OnInit {
  dato: Observable<datosModel[]> | undefined;
  datosFiltrados: datosModel[] = [];

  constructor(private dataService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.dato = this.dataService.getDatos();
    this.dato.subscribe((data: datosModel[]) => this.datosFiltrados = data);
  }

  filtrarDatos(event: Event) {
    const tipo = (event.target as HTMLSelectElement).value;
    if (tipo === 'clientes') {
      this.dato = this.dataService.getDatosCliente()
      // this.dataService.getDatosCliente().subscribe((data) => this.dato = data);
    } else if (tipo === 'proveedores') {
      this.dato = this.dataService.getDatosProveedor()
      // this.dataService.getDatosProveedor().subscribe((data) => this.dato = data);
    } else {
      this.obtenerDatos();
    }
  }
}
