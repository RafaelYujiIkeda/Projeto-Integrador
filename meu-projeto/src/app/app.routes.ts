import { Routes } from '@angular/router';

import { PaginaInicial } from './pagina-inicial/pagina-inicial';
import { Login } from './login/login';
import { Reciclagem } from './reciclagem/reciclagem';
import { Ecopontos } from './ecopontos/ecopontos';
import { Cadastro } from './cadastro/cadastro';
import { Descarte } from './descarte/descarte';
import { Coleta } from './coleta/coleta';

export const routes: Routes = [
  {
    path: '',
    component: PaginaInicial
  },
  {
    path: 'cadastro',
    component: Cadastro
  },
  {
    path: 'descarte',
    component: Descarte
  },
  {
    path: 'coleta',
    component: Coleta
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'reciclagem',
    component: Reciclagem
  },

  {
    path: 'ecopontos',
    component: Ecopontos
  }
];