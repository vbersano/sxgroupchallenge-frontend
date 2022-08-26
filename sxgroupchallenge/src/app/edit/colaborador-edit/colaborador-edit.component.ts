import { EmpresaService } from './../../service/empresa.service';
import { Empresa } from './../../model/Empresa';
import { Colaborador } from './../../model/Colaborador';
import { Router, ActivatedRoute } from '@angular/router';
import { ColaboradorService } from './../../service/colaborador.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-colaborador-edit',
  templateUrl: './colaborador-edit.component.html',
  styleUrls: ['./colaborador-edit.component.css']
})
export class ColaboradorEditComponent implements OnInit {

  empresa: Empresa = new Empresa
  colaborador: Colaborador = new Colaborador
  listaEmpresas: Empresa[]

  id = environment.id
  nome = environment.nome
  foto = environment.foto

  idEmpresa: number

  constructor(
    private colaboradorService: ColaboradorService,
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdColaborador(id)
    this.getAllEmpresas()
  }

  findByIdColaborador(id: number) {
    this.colaboradorService.getByIdColaborador(id).subscribe((resp: Colaborador) => {
      this.colaborador = resp
    })
  }

  getAllEmpresas() {
    this.empresaService.getAllEmpresa().subscribe((resp: Empresa[]) => {
      this.listaEmpresas = resp
    })

  }

  findByIdEmpresa() {
    this.empresaService.getByIdEmpresa(this.idEmpresa).subscribe((resp: Empresa) => {
      this.empresa = resp
    })
  }

  atualizar() {
    this.empresa.id = this.idEmpresa
    this.colaborador.empresa = this.empresa

    this.colaboradorService.putColaborador(this.colaborador).subscribe((resp: Colaborador) => {
      this.colaborador = resp
      alert('Dados Atualizados com sucesso')
      this.router.navigate(['/mainpage'])
    })

  }

}
