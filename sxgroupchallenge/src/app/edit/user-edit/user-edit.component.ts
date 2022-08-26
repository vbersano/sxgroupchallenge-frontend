import { AuthService } from './../../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from './../../model/User';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  foto = environment.foto

  user: User = new User
  confirmarSenha: string
  idUser: number

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idUser = this.route.snapshot.params['id']
    this.findByIdUser(this.idUser)

  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp
    })
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  atualizar() {
    if (this.user.senha != this.confirmarSenha) {
      alert('Senhas diferem. Digite novamente')

    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        alert('Usuário atualizado com sucesso')

        environment.foto = ''
        environment.nome = ''
        environment.token = ''
        environment.id = 0

        this.router.navigate(['/login'])

      }, erro => {
        if (erro.status == 400) {
          alert('Não foi  atualizar o usuario, revise os dados!')
        }
      })
    }
  }

}
