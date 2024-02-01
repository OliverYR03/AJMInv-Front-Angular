import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[] =[{
    titulo:'dashboard',
    icono: 'nav-icon fa-solid fa-gauge',
    submenu:[
      {titulo:'Clientes', url:'clientes',icon:'fas fa-user'},
      {titulo:'Productos', url:'productos',icon:'fas fa-box'},
      {titulo:'Proveedores', url:'proveedores',icon:'fas fa-cube'},
    ]
  }]

  proveedores:any[] =[{
    titulo:'Proveedores',
    icono: 'nav-icon fa-solid fa-boxes-stacke',
    submenu:[
      {titulo: 'Listar', url:'proveedores', icon: 'fa-solid fa-list'},
      {titulo: 'Nuevo', url:'proveedores/new', icon: 'fa-solid fa-plus'}
    ]
  }]

  clientes:any[] =[{
    titulo:'Proveedores',
    icono: 'nav-icon fa-solid fa-boxes-stacke',
    submenu:[
      {titulo: 'Listar', url:'clientes', icon: 'fa-solid fa-list'},
      {titulo: 'Nuevo', url:'clientes/new', icon: 'fa-solid fa-plus'}
    ]
  }]

  productos:any[] =[{
    titulo:'productos',
    icono: 'nav-icon fa-solid fa-boxes-stacke',
    submenu:[
      {titulo: 'Listar', url:'productos', icon: 'fa-solid fa-list'},
      {titulo: 'Nuevo', url:'productos/new', icon: 'fa-solid fa-plus'}
    ]
  }]

  categories:any[] =[{
    titulo:'categories',
    icono: 'nav-icon fa-solid fa-boxes-stacke',
    submenu:[
      {titulo: 'Listar', url:'categories', icon: 'fa-solid fa-list'},
      {titulo: 'Nuevo', url:'categories/new', icon: 'fa-solid fa-plus'}
    ]
  }]

  constructor() { }
}
