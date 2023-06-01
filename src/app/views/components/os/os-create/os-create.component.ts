import { Component, OnInit } from '@angular/core';
import { Os } from 'src/app/models/os';
import { Status } from 'src/app/models/status';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { Prioridade } from 'src/app/models/prioridade';
import { OsService } from 'src/app/services/os.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

interface Status_teste {
  value: string;
  viewValue: string;
}

interface Prioridade_teste {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit{



  constructor(
  private service: OsService,
  private router: Router,
  private tecservice : TecnicoService,
  private cliservice : ClienteService
  ){}

  tecnicos: Tecnico[] = [];
  clientes: Cliente[] = [];


 os: Os = {
  tecnico: '',
  cliente: '',
  observacoes: '',
  status: '',
  prioridade: '',
 }

  ngOnInit(): void{
    this.carregarTecnicos();
    this.carregarCliente();
  }

  create(): void {
    this.service.create(this.os).subscribe((resposta) => {
      this.router.navigate(['os']);
      this.service.message('Os cadastrado com sucesso!');
    }, err => {
      console.log(err);
    })
    console.log(this.os.tecnico);
  }


  cancelar(){
    this.router.navigate(['os'])
  }



  // status: Status_teste[] = [
  //   {value: 'ABERTO', viewValue: 'ABERTO'},
  //   {value: 'ANDAMENTO', viewValue: 'ANDAMENTO'},
  //   {value: 'FECHADO', viewValue: 'FECHADO'},
  // ];

  // prioridade: Prioridade_teste[] = [
  //   {value: 'BAIXA', viewValue: 'BAIXA'},
  //   {value: 'MEDIA', viewValue: 'MEDIA'},
  //   {value: 'ALTA', viewValue: 'ALTA'},
  // ];

  // selectedStatus = this.status[2].value;
  // selectedPrior = this.prioridade[0].value;

  // selectStatus(event: Event){
  //   this.selectedStatus  = (event.target as HTMLSelectElement).value;
  //   this.os.status = this.selectStatus;
  // }

  carregarTecnicos(){
   this.tecservice.findAll().subscribe(x =>{
      this.tecnicos = x;
    });
  }

  carregarCliente(){
    this.cliservice.findAll().subscribe(x =>{
       this.clientes = x;
     });
  
   }
}


