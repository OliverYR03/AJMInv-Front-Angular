import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarProvidersComponent } from './providers/listar-providers/listar-providers.component';
import { EditarProvidersComponent } from './providers/editar-providers/editar-providers.component';
import { RegistrarProvidersComponent } from './providers/registrar-providers/registrar-providers.component';

const routes:Routes=[
  {
    path:'dashboard',component: PagesComponent,
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'Dashboard'}},
      {path:'proveedores',component:ListarProvidersComponent, data:{titulo:'proveedores'}},
      {path: 'proveedores/editar/:id', component: EditarProvidersComponent, data:{titulo:'Editar Proveedor'}},
      {path: 'proveedores/new', component: RegistrarProvidersComponent, data:{titulo: 'Registrar proveedor'}}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagesRoutingModule { }
