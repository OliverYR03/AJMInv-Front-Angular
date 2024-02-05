import { Component, OnInit, Provider } from '@angular/core';
import { Productos } from 'src/app/services/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Router } from '@angular/router';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';
import { Proveedores } from 'src/app/services/proveedores/proveedores';


@Component({
  selector: 'app-listar-products',
  templateUrl: './listar-products.component.html',
  styleUrls: ['./listar-products.component.css']
})
export class ListarProductsComponent implements OnInit{

  products: Productos[];
  providers: Proveedores[];

  constructor(private productsService:ProductosService, private providersService:ProveedoresService, private router:Router){}

  ngOnInit(): void {
      this.getAllProducts();
      this.getAllProviders();
  }

  private getAllProducts(){
    this.productsService.getAllProducts().subscribe(data=> {
      this.products = data;
    });
  }

  private  getAllProviders(){
    this.providersService.getAllProviders().subscribe(data=> {
      this.providers = data;
    });
  }

  updateProduct(id:number){
    this.router.navigate(['productos/editar',id]);
  }

  deleteProduct(id:number){
    this.productsService.dropProduct(id).subscribe(data => {
      console.log(data);
      this.getAllProducts();
    });
  }

}
