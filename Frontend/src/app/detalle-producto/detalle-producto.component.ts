import { Component } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, observeOn } from 'rxjs/operators'; 
import { formatISO, addWeeks } from 'date-fns';
import { todo } from '../Shared/usuario.model';

import { datosModel, perfilModel, pesosmodel, productoconpesomodel, productomodel, reservasmodel } from '../Shared/usuario.model';
@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {
  datos: Observable <datosModel[]> | undefined;
  todo: Observable <todo[]> | undefined;
  id: string = '';
  cantidadReserva: number = 1;

  constructor (private router:Router, private usuarioService: UsuarioService, private route:ActivatedRoute) {}
  
  urlimagen=this.usuarioService.apiUrl+"/imagenes/"
  urlimagenp=this.usuarioService.apiUrl+"/productos/"
  ngOnInit(): void {
      const correo = this.usuarioService.obtenercorreo()!
      this.datos = this.usuarioService.usuario_info(correo)
      console.log(this.datos) 
      let Id_Producto = this.todo = this.route.snapshot.params['Id_Producto'];
      this.todo = this.usuarioService.productoid(Id_Producto)
      console.log (this.todo)
      
  }
  reservarProductoUsuario() {
    // Obtener la fecha y hora actual en la zona horaria de Colombia
    const fechaActual = new Date();
    const fechaInicio = formatISO(fechaActual, { representation: 'date' }); 

    // Calcular la fecha de finalización sumando una semana a la fecha de inicio
    const fechaFin = formatISO(addWeeks(fechaActual, 1), { representation: 'date' }); 

    // Crear la reserva con las fechas calculadas
    const reserva: reservasmodel = {
      Id_Reserva: '',
      Fecha_Inicio: fechaInicio,
      Duracion: fechaFin,
      Estado: 'Reservado'
    };

    // Llamar al servicio para reservar el producto
    this.usuarioService.reservarProductoUsuario(reserva).subscribe((data) => {
      console.log(data)
      console.log('Producto reservado con éxito');
      alert('Producto reservado con éxito')
      this.router.navigate(['/pag-prin-cliente']); 
    }, error => {
      console.error('Error al reservar producto:', error);
    });
  }
  
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/bienvenido'])
  }

}