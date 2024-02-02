import { Component } from '@angular/core';
import { environment } from 'src/app/environments/environments';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/services/user/user';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent {

  errorMesage:String="";
  user?:User;

  constructor(private userService:UserService){
    this.userService.getUser(environment.userId).subscribe({
      next: (userData) => {
        this.user=userData;
      },
      error: (errorData) => {
        this.errorMesage=errorData
      },
      complete: () => {
        console.info("User Data ok")
      }
    })
  }

}
