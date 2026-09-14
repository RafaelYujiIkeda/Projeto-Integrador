import { Routes } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';

export const routes: Routes = [
{
    path: '',
    component: Cadastro
},
{
    path: 'cadastro',
    component: Cadastro
},
{
    path: 'login',
    component: Login
}
];
