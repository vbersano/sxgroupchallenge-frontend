import { ActivatedRoute, Router } from '@angular/router';
import { EmpresaService } from './../../service/empresa.service';
import { Empresa } from './../../model/Empresa';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css']
})
export class EmpresaEditComponent implements OnInit {

  empresa: Empresa = new Empresa()

  nome = environment.nome
  foto = environment.foto

  constructor(
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
    this.findByIdEmpresa(id)
  }

  findByIdEmpresa(id: number) {
    this.empresaService.getByIdEmpresa(id).subscribe((resp: Empresa) => this.empresa = resp)

  }

  atualizar() {
    this.empresaService.putEmpresa(this.empresa).subscribe((resp: Empresa) => {
      this.empresa = resp
      alert('Empresa Atualizada!')

      this.router.navigate(['/empresa'])
    })
  }

}
