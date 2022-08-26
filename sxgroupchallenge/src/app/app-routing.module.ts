import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { ColaboradorEditComponent } from './edit/colaborador-edit/colaborador-edit.component';
import { ColaboradorDeleteComponent } from './delete/colaborador-delete/colaborador-delete.component';
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
  { path: 'empresa-edit/:id', component: EmpresaEditComponent },
  { path: 'colaborador-edit/:id', component: ColaboradorEditComponent },
  { path: 'empresa-delete/:id', component: EmpresaDeleteComponent },
  { path: 'colaborador-delete/:id', component: ColaboradorDeleteComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
