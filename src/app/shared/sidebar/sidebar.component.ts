import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  menuItems: any[];
  proveedores: any[];
  clientes: any[];
  productos: any[];
  categorias: any[];

  constructor(private sidebarService: SidebarService) {
    this.menuItems = this.sidebarService.menu;
    this.proveedores = this.sidebarService.proveedores
    this.clientes = this.sidebarService.clientes;
    this.productos = this.sidebarService.productos;
    this.categorias = this.sidebarService.categories;
    this.initTreeview();
    
  }

  ngOnInit() {
    // Inicializa Treeview después de que Angular haya renderizado el componente.
    // Utiliza setTimeout para asegurarte de que esto ocurra después del ciclo de detección de cambios.
    setTimeout(() => {
      this.initTreeview();
    });
  }

  ngAfterViewInit() {
    // En caso de que haya otras inicializaciones necesarias después de la vista.
    // Puedes mover la llamada a initTreeview() aquí si es necesario.
    this.initTreeview();
  }

  logout() {
    location.href = 'login';
  }

  private initTreeview() {
    // Llamada a Treeview para inicializar el menú desplegable.
    $('[data-widget="treeview"]').Treeview();
  }
}