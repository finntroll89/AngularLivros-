import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

import { ControleEditoraService } from './controle-editora.service';
import { ControleLivrosService } from './controle-livros.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RodaPeComponent } from './roda-pe/roda-pe.component';



@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent,
    HomeComponent,
    RodaPeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ControleEditoraService,
    ControleLivrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
