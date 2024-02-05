import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/services/category/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-listar-category',
  templateUrl: './listar-category.component.html',
  styleUrls: ['./listar-category.component.css']
})
export class ListarCategoryComponent implements OnInit{
  reg: any = 0;
  categorys: Category[];
  sumar: boolean = true;
  constructor(private categoryService:CategoryService, private router:Router){
    console.log(this.reg)
  }

  ngOnInit(): void {
      this.getAllCategory();
  }

  show(){
    if(this.sumar){
      this.reg= this.reg +1;
    }else{
      this.reg = this.reg -1;
    }
    this.sumar = !this.sumar;
  }
  
  createCategory(){
    this.router.navigate(['categorias/new'])
  }

  updateCategory(id:number){
    this.router.navigate(['categorias/editar/',id]);
  }

  private getAllCategory(){
    this.categoryService.getAllCategory().subscribe(data => {
      this.categorys = data;
    });
  }

  dropProvider(id:number){
    this.categoryService.dropCategory(id).subscribe(data => {
      console.log(data);
      this.getAllCategory();
    })
  }
}
