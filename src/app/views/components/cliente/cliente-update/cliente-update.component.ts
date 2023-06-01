import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit{

  id_cli = '';

  cliente: Cliente = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(
    private router: Router,
    private service: ClienteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.id_cli = this.route.snapshot.paramMap.get('id')!;
      this.findById();  
  }

  update():void{
    this.service.uptade(this.cliente).subscribe((resposta) =>{
      this.router.navigate(['/clientes']);
      this.service.message('Cliente atualizado com sucesso');
    },err => {
      if (err.error.message.match('já cadastrado')   ) {
        this.service.message(err.error.message);
      } else if (err.error.errors[0].message === 'invalid Brazilian individual taxpayer registry number (CPF)'){
        this.service.message('CPF invalido!');
      }
    });
  }
    

  findById():void{
    this.service.findById(this.id_cli).subscribe((resposta) =>{
      this.cliente = resposta;
    });
  }

  nome = new FormControl('' , Validators.minLength(5));
  cpf = new FormControl('' , Validators.minLength(11));
  telefone = new FormControl('' , Validators.minLength(11));

  
  cancelar(): void {
    this.router.navigate(['/clientes']);
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



