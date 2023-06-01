import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent  {
  constructor(
    private router: Router,
    private service: ClienteService
  ) { }


  cliente: Cliente = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('' , Validators.minLength(5));
  cpf = new FormControl('' , Validators.minLength(11));
  telefone = new FormControl('' , Validators.minLength(11));

  cancelar(): void {
    this.router.navigate(['/clientes']);
  }

  create(): void {
    this.service.create(this.cliente).subscribe((resposta) => {
      this.router.navigate(['clientes']);
      this.service.message('Cliente cadastrado com sucesso!');
    }, err => {
      if (err.error.message.match('já cadastrado')   ) {
        this.service.message(err.error.message);
      } else {
        console.log(err);
      }
    })
  }

  errorValidNome(){
    if (this.nome.invalid){
      return 'o nome deve ter entre 5 e 100 caracteres';
    }
    return false;
  }

  errorValidcpf(){
    if (this.cpf.invalid){
      return 'o cpf deve ter entre 11 a 15 caracteres';
    }
    return false;
  }

  errorValidtelefone(){
    if (this.telefone.invalid){
      return 'o numero deve ter entre 11 e 18 caracteres';
    }
    return false;
  }




}
