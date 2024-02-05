import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarProvidersComponent } from './providers/listar-providers/listar-providers.component';
import { EditarProvidersComponent } from './providers/editar-providers/editar-providers.component';
import { RegistrarProvidersComponent } from './providers/registrar-providers/registrar-providers.component';
import { ListarProductsComponent } from './products/listar-products/listar-products.component';
import { EditarProductsComponent } from './products/editar-products/editar-products.component';
import { RegistarProductsComponent } from './products/registar-products/registar-products.component';
import { ListarCategoryComponent } from './category/listar-category/listar-category.component';

const routes:Routes=[
  {
    path:'dashboard',component: PagesComponent,
    children:[
      {path:'',component:DashboardComponent, data:{titulo:'Dashboard'}},
      
      // Productos

    ]
  },
  {
    path: 'proveedores', component: PagesComponent,
    children:[
      {path:'',component:ListarProvidersComponent, data:{titulo:'Proveedores Listar'}},
      {path: 'editar/:id', component: EditarProvidersComponent, data:{titulo:'Editar Proveedor'}},
      {path: 'new', component: RegistrarProvidersComponent, data:{titulo: 'Registrar proveedor'}}
    ]
  },
  {
    path: 'productos', component: PagesComponent,
    children:[
      {path:'', component:ListarProductsComponent, data:{titulo:'Productos listar'}},
      {path:'editar/:id', component: EditarProductsComponent, data:{titulo:'Editar Producto'}},
      {path: 'new', component: RegistarProductsComponent, data:{titulo: 'Registrar Producto'}}
    ]
  },
  {
    path: 'categorias', component: PagesComponent,
    children:[
    {path:'', component:ListarCategoryComponent, data:{titulo:'Categorias Listar'}},
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
