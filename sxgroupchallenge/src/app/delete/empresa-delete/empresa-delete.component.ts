import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from './../../service/empresa.service';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/Empresa';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-empresa-delete',
  templateUrl: './empresa-delete.component.html',
  styleUrls: ['./empresa-delete.component.css']
})
export class EmpresaDeleteComponent implements OnInit {

  constructor(
    private empresaService: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  empresa: Empresa = new Empresa()
  idEmpresa: number

  nome = environment.nome
  foto = environment.foto

  ngOnInit() {
    window.scroll(0, 0)

   /* if (environment.token == '') {
      this.router.navigate(['/login'])
    } */

    this.idEmpresa = this.route.snapshot.params['id']
    this.findByIdEmpresa(this.idEmpresa)
  }

  findByIdEmpresa(id: number) {
    this.empresaService.getByIdEmpresa(id).subscribe((resp: Empresa) =>
      this.empresa = resp)
  }

  apagar() {
    this.empresaService.deleteEmpresa(this.idEmpresa).subscribe(() => {
      alert('Empresa apagada com sucesso')
      this.router.navigate(['/empresa'])
    })
  }

  verificaImagem(event: Event) {
    const htmlImagem = event.target as HTMLImageElement;
    htmlImagem.src =
      'https://i.imgur.com/A6fhZb6.jpg';
  }

}
