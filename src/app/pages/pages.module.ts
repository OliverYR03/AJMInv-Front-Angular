import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarProvidersComponent } from './providers/listar-providers/listar-providers.component';
import { RegistrarProvidersComponent } from './providers/registrar-providers/registrar-providers.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EditarProvidersComponent } from './providers/editar-providers/editar-providers.component';
import { ListarProductsComponent } from './products/listar-products/listar-products.component';
import { RegistarProductsComponent } from './products/registar-products/registar-products.component';
import { EditarProductsComponent } from './products/editar-products/editar-products.component';
import { ListarUsuariosComponent } from './usuarios/listar-usuarios/listar-usuarios.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListarProvidersComponent,
    RegistrarProvidersComponent,
    PagesComponent,
    EditarProvidersComponent,
    ListarProductsComponent,
    RegistarProductsComponent,
    EditarProductsComponent,
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    DashboardComponent,
    ListarProvidersComponent,
    RegistrarProvidersComponent,
    PagesComponent
  ]
})
export class PagesModule { }
