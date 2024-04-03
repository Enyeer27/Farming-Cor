import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Shared/usuario.service';
import { productoconpesomodel, productomodel } from '../Shared/usuario.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-producto-total-admin',
  templateUrl: './producto-total-admin.component.html',
  styleUrls: ['./producto-total-admin.component.css']
})
export class ProductoTotalAdminComponent implements OnInit{
  producto: Observable<productoconpesomodel[]> | undefined;
  constructor (private usuarioService: UsuarioService){

  }

  urlimagenp=this.usuarioService.apiUrl+"/productos/"

  ngOnInit() {
    this.producto = this.usuarioService.mostrarproducto();

  }
  
  Borrar_producto(id:string) {
    this.usuarioService.borrarproducto(id).subscribe(data => {
      console.log(data)
      alert(data)
      window.location.reload()
    })
  }
}