import { EmpresaService } from './../service/empresa.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Empresa } from '../model/Empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  foto = environment.foto

  empresa: Empresa = new Empresa()
  listaEmpresas: Empresa[]

  constructor(
    private router: Router,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    if (environment.foto == null) {
      this.foto = 'https://i.imgur.com/A6fhZb6.jpg'
    }

    this.findAllEmpresas()
  }

  findAllEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((resp: Empresa[]) => {
      this.listaEmpresas = resp
    })
  }

  cadastrar() {
    this.empresaService.postEmpresa(this.empresa).subscribe((resp: Empresa) => {
      this.empresa = resp
      alert('Empresa cadastrada com sucesso')

      this.findAllEmpresas()
      this.empresa = new Empresa()
    })
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/A6fhZb6.jpg';
  }

}
