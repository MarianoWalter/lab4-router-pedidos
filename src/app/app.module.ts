import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router'

import { AppComponent } from './app.component';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';

import Rutas from './app.pages';


@NgModule({
  declarations: [
    AppComponent,
    PedidosListaComponent,
    ProductosListaComponent,
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
