import { Route } from '@angular/router';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let rutas: Route[] = [
    {
        path: 'pedidos',
        component: PedidosListaComponent,
    },
    {
        path: 'productos',
        component: ProductosListaComponent,
    },

    {
        path: '',
        redirectTo: '/pedidos',
        pathMatch: 'full',
    },

    // Siempre al final
    {
        path: '**',
        component: PageNotFoundComponent,
    }
];

export default rutas;

// https://angular.io/guide/router
