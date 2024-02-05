import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/auth/login.service';
import { UserService } from 'src/app/services/user/user.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { User } from 'src/app/services/user/user';
import { environment } from 'src/app/environments/environments';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  errorMessage:String="";
  user?:User;
  userLoginOn:boolean=false;

  menuItems: any[];
  proveedores: any[];
  clientes: any[];
  productos: any[];
  categorias: any[];

  registerForm=this.formBuilder.group({
    id:[''],
    lastname:['',Validators.required],
    firstname:['', Validators.required],
    country:['',Validators.required]
  })

  constructor(private sidebarService: SidebarService,private userService:UserService, private formBuilder:FormBuilder, private loginService:LoginService  ){
    this.userService.getUser(environment.userId).subscribe({
      next: (userData) => {
        this.user=userData;
        this.registerForm.controls.id.setValue(userData.id.toString());
        this.registerForm.controls.firstname.setValue( userData.firstname);
        this.registerForm.controls.lastname.setValue( userData.lastname);
        this.registerForm.controls.country.setValue( userData.country);
      },
      error: (errorData) => {
        this.errorMessage=errorData
      },
      complete: () => {
        console.info("User Data ok");
      }
    })

    this.loginService.userLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    })

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