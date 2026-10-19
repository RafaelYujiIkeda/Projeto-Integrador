import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  senha = '';
  mensagem = '';

  constructor(private router: Router) {}

  entrar(): void {
    const email = this.email.trim().toLowerCase();

    if (!email || !this.senha) {
      this.mensagem = 'Preencha o e-mail e a senha.';
      return;
    }

    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );

    const usuario = usuarios.find(
      item => item.email === email && item.senha === this.senha
    );

    if (!usuario) {
      this.mensagem = 'E-mail ou senha incorretos.';
      return;
    }

    // Guarda apenas os dados básicos da sessão de demonstração.
    localStorage.setItem('usuarioLogado', JSON.stringify({
      nome: usuario.nome,
      email: usuario.email
    }));

    alert(`Bem-vindo(a), ${usuario.nome}!`);

    this.router.navigate(['/']);
  }

  esqueciSenha(event: Event): void {
    event.preventDefault();
    this.mensagem =
      'Entre em contato com o responsável pelo site para recuperar sua senha.';
  }
}