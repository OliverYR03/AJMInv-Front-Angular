import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedores } from 'src/app/services/proveedores/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';
@Component({
  selector: 'app-listar-providers',
  templateUrl: './listar-providers.component.html',
  styleUrls: ['./listar-providers.component.css']
})
export class ListarProvidersComponent implements OnInit{
  reg: any = 0;
  providers: Proveedores[];
  sumar: boolean = true;
  constructor(private providerService:ProveedoresService, private router:Router){
    console.log(this.reg)
  }

  ngOnInit(): void {
      this.getAllProviders();
  }

  show(){
    if(this.sumar){
      this.reg= this.reg +1;
    }else{
      this.reg = this.reg -1;
    }
    this.sumar = !this.sumar;
  }
  
  createProvider(){
    this.router.navigate(['proveedores/new'])
  }

  updateProvider(id:number){
    this.router.navigate(['proveedores/editar/',id]);
  }

  private getAllProviders(){
    this.providerService.getAllProviders().subscribe(data => {
      this.providers = data;
    });
  }

  dropProvider(id:number){
    this.providerService.dropProvider(id).subscribe(data => {
      console.log(data);
      this.getAllProviders();
    })
  }
}
