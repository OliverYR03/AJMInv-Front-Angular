import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Productos } from 'src/app/services/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Proveedores } from 'src/app/services/proveedores/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-editar-products',
  templateUrl: './editar-products.component.html',
  styleUrls: ['./editar-products.component.css']
})
export class EditarProductsComponent implements OnInit{

  id:number;
  category: Category[];
  providers: Proveedores[];
  products: Productos = new Productos();

  constructor(
    private route:ActivatedRoute,
    private providerService: ProveedoresService,
    private productsService: ProductosService,
    private categoryService: CategoryService,
    private router:Router
  ){}

  private getAllProviders(){
    this.providerService.getAllProviders().subscribe(data => {
      this.providers = data;
    });
  }

  private getAllCategory(){
    this.categoryService.getAllCategory().subscribe(data=> {
      this.category = data;
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getAllProviders();
    this.getAllCategory();
    this.productsService.getProductId(this.id).subscribe(dato=> {
    this.products = dato;
    },error => console.log(error));
  }

  returnBefore(){
    this.router.navigate(['/productos']);
  }

  onSubmit(){
    this.productsService.updateProduct(this.id,this.products).subscribe(data =>{
      this.returnBefore();
    }, error => console.log(error));
  }

}