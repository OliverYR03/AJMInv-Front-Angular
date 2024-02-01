import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarProvidersComponent } from './providers/listar-providers/listar-providers.component';
import { RegistrarProvidersComponent } from './providers/registrar-providers/registrar-providers.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EditarProvidersComponent } from './providers/editar-providers/editar-providers.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListarProvidersComponent,
    RegistrarProvidersComponent,
    PagesComponent,
    EditarProvidersComponent
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
