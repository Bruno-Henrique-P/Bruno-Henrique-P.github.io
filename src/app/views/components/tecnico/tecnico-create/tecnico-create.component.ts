import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent {
  constructor(
    private router: Router,
    private service: TecnicoService
  ) { }


  tecnico: Tecnico = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('' , Validators.minLength(5));
  cpf = new FormControl('' , Validators.minLength(11));
  telefone = new FormControl('' , Validators.minLength(11));


  cancelar(): void {
    this.router.navigate(['/tecnicos']);
  }

  create(): void {
    this.service.create(this.tecnico).subscribe((resposta) => {
      this.router.navigate(['tecnicos']);
      this.service.message('Tecnicos cadastrado com sucesso!');
    }, err => {
      if (err.error.message.match('já cadastrado')   ) {
        this.service.message(err.error.message);
      } else if (err.error.errors[0].message === 'invalid Brazilian individual taxpayer registry number (CPF)'){
        this.service.message('CPF invalido!');
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
