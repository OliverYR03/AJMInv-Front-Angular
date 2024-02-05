import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { Productos } from 'src/app/services/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
import { Proveedores } from 'src/app/services/proveedores/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-registar-products',
  templateUrl: './registar-products.component.html',
  styleUrls: ['./registar-products.component.css']
})
export class RegistarProductsComponent implements OnInit{
  id:number;
  providers: Proveedores[];
  category: Category[];
  products: Productos = new Productos();
  constructor(
    private route:ActivatedRoute,
    private providersService:ProveedoresService,
    private productsService: ProductosService,
    private categoryService: CategoryService,
    private router:Router){}

  ngOnInit(): void {
    this.getAllProviders();
    this.getAllCategory();
  }


  private  getAllProviders(){
    this.providersService.getAllProviders().subscribe(data=> {
      this.providers = data;
    });
  }

  private getAllCategory(){
    this.categoryService.getAllCategory().subscribe(data=> {
      this.category = data;
    })
  }
  

  saveProvider(){
    this.productsService.createProduct(this.products).subscribe(data => {
      console.log(data);
      this.returnBefore();
    },error => console.log(error))
  }

  returnBefore(){
    this.router.navigate(['/proveedores']);
  }

  onSubmit(){
    this.saveProvider();
  }

}
