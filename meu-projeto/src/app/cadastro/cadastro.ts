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
  selector: 'app-cadastro',
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  nome = '';
  email = '';
  senha = '';
  confirmarSenha = '';
  mensagem = '';

  constructor(private router: Router) {}

  cadastrar(): void {
    const nome = this.nome.trim();
    const email = this.email.trim().toLowerCase();

    if (!nome || !email || !this.senha || !this.confirmarSenha) {
      this.mensagem = 'Preencha todos os campos.';
      return;
    }

    if (this.senha.length < 8) {
      this.mensagem = 'A senha deve ter pelo menos 8 caracteres.';
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.mensagem = 'As senhas não são iguais.';
      return;
    }

    const usuarios: Usuario[] = JSON.parse(
      localStorage.getItem('usuarios') || '[]'
    );

    const existente = usuarios.some(
      usuario => usuario.email === email
    );

    if (existente) {
      this.mensagem = 'Este e-mail já está cadastrado.';
      return;
    }

    usuarios.push({ nome, email, senha: this.senha });

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');

    this.router.navigate(['/login']);
  }
}