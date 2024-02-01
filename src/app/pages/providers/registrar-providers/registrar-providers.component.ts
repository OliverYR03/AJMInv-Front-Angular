import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Proveedores } from 'src/app/services/proveedores/proveedores';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';

@Component({
  selector: 'app-registrar-providers',
  templateUrl: './registrar-providers.component.html',
  styleUrls: ['./registrar-providers.component.css']
})
export class RegistrarProvidersComponent implements OnInit{
  id:number;
  providers: Proveedores = new Proveedores();
  constructor(private route:ActivatedRoute, private providersService: ProveedoresService,private router:Router){}

  ngOnInit(): void {
  }


  saveProvider(){
    this.providersService.createProvider(this.providers).subscribe(data => {
      console.log(data);
      this.returnBefore();
    },error => console.log(error))
  }

  returnBefore(){
    this.router.navigate(['/dashboard/proveedores']);
  }

  onSubmit(){
    this.saveProvider();
  }

}