import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProveedorComponent } from './proveedores/listar-proveedor/listar-proveedor.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { NuevoProveedorComponent } from './proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { ProductosListarComponent } from './productos/productos-listar/productos-listar.component';
import { ListarProductosComponent } from './productos/listar-productos/listar-productos.component';
import { EditarProductosComponent } from './productos/editar-productos/editar-productos.component';
import { NuevoProductosComponent } from './productos/nuevo-productos/nuevo-productos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarCategoriaComponent } from './categoria/listar-categoria/listar-categoria.component';
import { ListarClienteComponent } from './cliente/listar-cliente/listar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente/nuevo-cliente.component';



@NgModule({
  declarations: [
    ListarProveedorComponent,
    EditarProveedorComponent,
    NuevoProveedorComponent,
    ProductosListarComponent,
    ListarProductosComponent,
    EditarProductosComponent,
    NuevoProductosComponent,
    DashboardComponent,
    ListarCategoriaComponent,
    ListarClienteComponent,
    EditarClienteComponent,
    NuevoClienteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
