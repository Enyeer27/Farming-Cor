import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistroComponent } from './registro/registro.component';
import { FormPerfilClienteComponent } from './form-perfil-cliente/form-perfil-cliente.component';
import { FormPerfilProveedorComponent } from './form-perfil-proveedor/form-perfil-proveedor.component';
import { FormProductProveedorComponent } from './form-product-proveedor/form-product-proveedor.component';
import { FormProductActualizarComponent } from './form-product-actualizar/form-product-actualizar.component';
import { FormRegistradosComponent } from './form-registrados/form-registrados.component';
import { FormProductAdminComponent } from './form-product-admin/form-product-admin.component';
import { PagPrinAdminComponent } from './pag-prin-admin/pag-prin-admin.component';
import { PagPrinClienteComponent } from './pag-prin-cliente/pag-prin-cliente.component';
import { PagPrinProveedorComponent } from './pag-prin-proveedor/pag-prin-proveedor.component';
import { PerfilClienteComponent } from './perfil-cliente/perfil-cliente.component';
import { RegistradosComponent } from './registrados/registrados.component';
import { ReservacionesComponent } from './reservaciones/reservaciones.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { ProductoTotalAdminComponent } from './producto-total-admin/producto-total-admin.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { HistorialComponent } from './historial/historial.component';
import { HistorialTotalComponent } from './historial-total/historial-total.component';

export const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent },
  {path: 'Recuperar', component: RecuperarPasswordComponent},
  {path: 'pag-prin-admin', component: PagPrinAdminComponent},
  {path: 'pag-prin-cliente', component: PagPrinClienteComponent},
  {path: 'pag-prin-proveedor', component: PagPrinProveedorComponent},
  {path: 'form-perfil-cliente/:correo', component: FormPerfilClienteComponent},
  {path: 'form-perfil-proveedor/:correo', component: FormPerfilProveedorComponent},
  {path: 'form-product-proveedor', component: FormProductProveedorComponent},
  {path: 'form-product-proveedor/actualizar/:id', component: FormProductProveedorComponent},
  {path: 'form-product-actualizar/:id', component: FormProductActualizarComponent},
  {path: 'form-registrados', component: FormRegistradosComponent},
  {path: 'form-registrados/:id', component: FormRegistradosComponent},
  {path: 'form-product-admin/:id', component: FormProductAdminComponent},
  {path: 'perfil-cliente', component: PerfilClienteComponent},
  {path: 'registrados', component: RegistradosComponent},
  {path: 'reservaciones', component: ReservacionesComponent},
  {path: 'historial', component: HistorialComponent},
  {path: 'historial-total', component: HistorialTotalComponent},
  {path: 'producto-total-admin', component: ProductoTotalAdminComponent},
  {path: 'detalle-producto', component: DetalleProductoComponent},
  {path: 'detalle-producto/:Id_Producto', component: DetalleProductoComponent},
  {path: 'detalle-producto/reservar/:Id_Producto', component: DetalleProductoComponent},
  
  { path: 'cerrar-sesion', redirectTo: '/bienvenido', pathMatch: 'full' },
  { path: '', pathMatch: 'full', redirectTo: '/bienvenido'},
  { path: '**', pathMatch: 'full',redirectTo:'/bienvenido'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
