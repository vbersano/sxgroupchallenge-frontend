import { User } from './../model/User';
import { EmpresaService } from './../service/empresa.service';
import { ColaboradorService } from './../service/colaborador.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Colaborador } from '../model/Colaborador';
import { Empresa } from '../model/Empresa';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  empresa: Empresa = new Empresa
  colaborador: Colaborador = new Colaborador
  listaEmpresas: Empresa[]
  listaColaborador: Colaborador[]
  idEmpresa: number

  user: User = new User
  idUser = environment.id

  id = environment.id
  nome = environment.nome
  foto = environment.foto

  constructor(
    private router: Router,
    private colaboradorService: ColaboradorService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.getAllEmpresas()
    this.getAllColaboradores()
  }

  getAllEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((resp: Empresa[]) => {
      this.listaEmpresas = resp
    })

  }

  getAllColaboradores() {
    this.colaboradorService.getAllColaboradores().subscribe((resp: Colaborador[]) => {
      this.listaColaborador = resp
    })
  }

  findByIdEmpresa() {
    this.empresaService.getByIdEmpresa(this.idEmpresa).subscribe((resp: Empresa) => {
      this.empresa = resp
    })
  }

  cadastrar() {
    this.empresa.id = this.idEmpresa
    this.colaborador.empresa = this.empresa

    this.user.id = this.idUser
    this.colaborador.usuario = this.user

    this.colaboradorService.postColaborador(this.colaborador).subscribe((resp: Colaborador) => {
      this.colaborador = resp
      alert("Colaborador cadastrado com sucesso!")
      this.colaborador = new Colaborador()
    }, erro => {
      if (erro.status == 401) {
        alert('Não foi possível criar a postagem, revise os dados!')
      }
    })
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/A6fhZb6.jpg';
  }

}
