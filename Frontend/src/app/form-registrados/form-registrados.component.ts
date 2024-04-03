import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { rolesmodel, datosModel } from '../Shared/usuario.model';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';




@Component({
  selector: 'app-form-registrados',
  templateUrl: './form-registrados.component.html',
  styleUrls: ['./form-registrados.component.css']
})
export class FormRegistradosComponent implements OnInit{
  rol: rolesmodel[] = [];
  datos = new datosModel('','','','','','','','','','','','','','','');
  id = '';
  

  constructor(private UsuarioService : UsuarioService, private route: ActivatedRoute, private router: Router

    ) {}
  ngOnInit(): void {
      this.getRol();
      
      this.id = this.route.snapshot.params['id']

      if (this.id) {
        this.UsuarioService.getDato(this.id).subscribe(data => {
          this.datos = data[0];
        });
      }
  }

  
  getRol() {
    this.UsuarioService.getRol().subscribe(
      (data: rolesmodel[]) => {this.rol= data},
      error=> {console.log(error)}
    );
  }

  guardarDatos() {
    if (this.id) {
      this.UsuarioService.actualizarDato(this.id, this.datos).subscribe(
        (response) => {
          alert("Usuario Actualizado");
          console.log('Datos actualizados correctamente:', response);
          // Redirigir a otra página o realizar alguna acción después de actualizar los datos
          this.router.navigate(['/registrados']);

        },
        (error) => {
          console.error('Error al actualizar los datos:', error);
          // Manejar el error apropiadamente, mostrar un mensaje al usuario, etc.
        }
      );
    } else {
      // Manejar el caso de creación de nuevos datos si no hay un ID
    }
  }
}

