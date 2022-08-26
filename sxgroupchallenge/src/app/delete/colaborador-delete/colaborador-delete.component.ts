import { Colaborador } from './../../model/Colaborador';
import { Empresa } from './../../model/Empresa';
import { ColaboradorService } from './../../service/colaborador.service';
import { EmpresaService } from './../../service/empresa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-colaborador-delete',
  templateUrl: './colaborador-delete.component.html',
  styleUrls: ['./colaborador-delete.component.css']
})
export class ColaboradorDeleteComponent implements OnInit {


  colaborador: Colaborador = new Colaborador
  listaEmpresas: Empresa[]
  idEmpresa: number
  idColaborador: number

  nome = environment.nome
  foto = environment.foto

  constructor(
    private empresaService: EmpresaService,
    private colaboradorService: ColaboradorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/login'])
    }

    this.idColaborador = this.route.snapshot.params['id']
    this.findByIdColaborador(this.idColaborador)
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

  apagar() {
    this.colaboradorService.deleteColaborador(this.idColaborador).subscribe(()=>{
      alert("O Colaborador foi removido da Base de Dados!")
      this.router.navigate(['/mainpage'])
    })

  }

}
