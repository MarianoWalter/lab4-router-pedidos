import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';

import Rutas from './app.pages';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidosListaComponent,
    ProductosListaComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Rutas, {
      enableTracing: true,
      // useHash: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
