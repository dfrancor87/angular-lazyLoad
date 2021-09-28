import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoComponent } from '../productos/pages/listado/listado.component';
import { EditarComponent } from './pages/editar/editar.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'nuevo',
        component: NuevoComponent
      },
      {
        path: 'editar',
        component: EditarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'usuario',
        component: UsuarioComponent
      },
      {
        path: '**',
        component: ListadoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
