import { EmpresaDeleteComponent } from './delete/empresa-delete/empresa-delete.component';
import { EmpresaEditComponent } from './edit/empresa-edit/empresa-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mainpage', component: InicioComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'empresa-edit/:id', component: EmpresaEditComponent  },
  { path: 'empresa-delete/:id', component: EmpresaDeleteComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
