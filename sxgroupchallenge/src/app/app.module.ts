import { TokenInterceptorService } from './service/token-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy } from '@angular/common';
import { LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlertasComponent } from './alertas/alertas.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarmainComponent } from './navbarmain/navbarmain.component';
import { AlertasService } from './service/alertas.service';
import { InicioComponent } from './inicio/inicio.component';
import { MaskApplierService, NgxMaskModule } from 'ngx-mask';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaEditComponent } from './edit/empresa-edit/empresa-edit.component';
import { EmpresaDeleteComponent } from './delete/empresa-delete/empresa-delete.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColaboradorEditComponent } from './edit/colaborador-edit/colaborador-edit.component';
import { ColaboradorDeleteComponent } from './delete/colaborador-delete/colaborador-delete.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AlertasComponent,
    LoginComponent,
    SignupComponent,
    NavbarmainComponent,
    InicioComponent,
    EmpresaComponent,
    EmpresaEditComponent,
    EmpresaDeleteComponent,
    ColaboradorEditComponent,
    ColaboradorDeleteComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
