import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  //inicializando array de usuários
  users: Array<User> = [];

  //injeção de dependencias do serviço
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /* métodos */
  getUsers(): void
  {
    this.userService.getUsers().subscribe(response =>
      {
        this.users = response;
      })
  }

  deleteUser(id: number): void
  {
    this.userService.deleteUser(id).subscribe(resultado =>
      {
        console.log('usuário excluido');
      }, 
      //funções de callback
      (erro)=>
      {
        console.log(erro);
      }, ()=>
      {
        this.getUsers();
      })
  }

}
