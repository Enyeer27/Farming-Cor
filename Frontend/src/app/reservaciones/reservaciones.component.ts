import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { reservasmodel } from '../Shared/usuario.model';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {
  reservas: reservasmodel[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.cargarReservas();
  }

  cargarReservas(): void {
    this.usuarioService.getReservas().subscribe(
      reservas => {
        this.reservas = reservas;
      },
      error => {
        console.error('Error al cargar las reservas:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    );
  }

  actualizarEstado(reserva: reservasmodel, estado: string): void {
    reserva.Estado = estado;
    this.usuarioService.actualizarReserva(reserva).subscribe(
      () => {
        alert('Reserva actualizada correctamente')
        console.log('Reserva actualizada correctamente');
        this.cargarReservas(); // Vuelve a cargar las reservas después de la actualización
      },
      error => {
        alert('Error al actualizar la reserva')
        console.error('Error al actualizar la reserva:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    );
  }
}
