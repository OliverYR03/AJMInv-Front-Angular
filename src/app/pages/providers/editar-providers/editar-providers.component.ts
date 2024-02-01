import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proveedores } from 'src/app/services/proveedores/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-editar-providers',
  templateUrl: './editar-providers.component.html',
  styleUrls: ['./editar-providers.component.css']
})
export class EditarProvidersComponent implements OnInit{

  id:number;
  providers: Proveedores = new Proveedores();

  constructor(
    private route:ActivatedRoute,
    private providersService: ProveedoresService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.providersService.getProviderId(this.id).subscribe(dato=> {
    this.providers = dato;
    },error => console.log(error));
  }

  returnBefore(){
    this.router.navigate(['/dashboard/proveedores']);
  }

  onSubmit(){
    this.providersService.updateProvider(this.id,this.providers).subscribe(data =>{
      this.returnBefore();
    }, error => console.log(error));
  }

}
