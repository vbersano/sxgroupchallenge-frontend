import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Colaborador } from '../model/Colaborador';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  colaborador: Colaborador = new Colaborador

  id = environment.id
  nome = environment.nome
  foto = environment.foto

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.router.navigate(['/login'])
    }
  }

}
