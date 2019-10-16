import { Route } from '@angular/router';
import { PedidosListaComponent } from './pedidos-lista/pedidos-lista.component';
import { ProductosListaComponent } from './productos-lista/productos-lista.component';

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
    }
];

export default rutas;

// https://angular.io/guide/router
