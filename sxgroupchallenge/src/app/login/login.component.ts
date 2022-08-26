import { Colaborador } from './../model/Colaborador';
import { ColaboradorService } from './../service/colaborador.service';
import { FooterComponent } from './../footer/footer.component';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: UserLogin = new UserLogin()
  listaColaborador: Colaborador[]

  constructor(
    private authService: AuthService,
    private router: Router,
    private colaboradorService: ColaboradorService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    this.getAllColaboradores()
  }

  getAllColaboradores() {
    this.colaboradorService.getAllColaboradores().subscribe((resp: Colaborador[]) => {
      this.listaColaborador = resp
    })
  }

  entrar() {
    this.authService.entrar(this.userLogin).subscribe((resp: UserLogin) => {
      this.userLogin = resp

      environment.token = this.userLogin.token
      environment.nome = this.userLogin.nome
      environment.foto = this.userLogin.foto
      environment.id = this.userLogin.id

      console.log(environment.token)
      console.log(environment.nome)
      console.log(environment.foto)
      console.log(environment.id)

      this.router.navigate(['/mainpage'])
    }, erro => {
      if (erro.status == 500) {
        alert('Usuario ou senha estão incorretos')
      }
    })

  }

}
