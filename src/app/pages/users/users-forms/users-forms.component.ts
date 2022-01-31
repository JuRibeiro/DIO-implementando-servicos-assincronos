import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-forms',
  templateUrl: './users-forms.component.html',
  styleUrls: ['./users-forms.component.css']
})
export class UsersFormsComponent implements OnInit {
  userForm: FormGroup;
  users: Array<User> = [];
  userId: any = '';

  constructor(
    private formBuild: FormBuilder,
    private actRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    ) 
  {
    this.userForm = this.formBuild.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: '',
      profissao: ''
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(parametros =>
      {
        this.userId = parametros.get('id');
       /*  console.log(this.userId); */
       if (this.userId !== null)
       {
        this.userService.getUser(this.userId).subscribe(resultado =>
          {
            this.userForm.patchValue(
              {
                id: resultado[0].id,
                nome: resultado[0].nome,
                sobrenome: resultado[0].sobrenome,
                idade: resultado[0].idade,
                profissao: resultado[0].profissao,
              }
            )
          })
       }
      })

    this.getusers();
  }

  getusers()
  {
    this.userService.getUsers().subscribe(resultado =>
      {
        this.users = resultado;
      })
  }

  createUser()
  {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    /* console.log(this.userForm.value) */
    this.userService.postUser(this.userForm.value).subscribe(resultado=>
      {
        console.log(`Usuário ${resultado.nome} ${resultado.sobrenome} cadastrado com sucesso!`)
      })
  }

  editUser()
  {
    this.userService.editUser(this.userId, this.userForm.value).subscribe(resultado =>
      {
        console.log("usuário atualizado", resultado);
      }, (erro)=>
      {

      }, 
      // callback complete
      ()=>
      {
        this.router.navigate(['/']);
      })
  }

  actionButton()
  {
    if(this.userId !== null)
    {
      this.editUser();
    }
    else
    {
      this.createUser();
    }
  }
}
