import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes';
import { Os } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnicos';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-abertas',
  templateUrl: './os-abertas.component.html',
  styleUrls: ['./os-abertas.component.css']
})
export class OsAbertasComponent {

  os: Os = {
    tecnico: '',
    cliente: '',
    observacoes: '',
    status: '',
    prioridade: '',
   }

   tecnico: Tecnico = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  cliente: Cliente = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }


   id_os = '';

  constructor(
    private router: Router,
    private service: OsService,
    private route: ActivatedRoute,
    private tec :TecnicoService,
    private cli :ClienteService
  ) { }

  ngOnInit(): void{
    this.id_os = this.route.snapshot.paramMap.get('id')!;
    this.findByid();
   }

  findByid():void{
  this.service.findById(this.id_os).subscribe(resposta =>{
      this.os = resposta;
      this.carregarTecnico();
      this.carregarcliente();
  });
  }

  carregarTecnico():void{
    this.tec.findById(this.os.tecnico).subscribe((resposta) =>{
      this.tecnico = resposta;
    });
  };

  carregarcliente():void{
    this.cli.findById(this.os.cliente).subscribe((resposta) =>{
      this.cliente = resposta;
    });
  };

  voltar():void{
    this.service.findById(this.id_os).subscribe(resposta =>{
      if(resposta.status == 'ENCERRADO'){
        this.router.navigate(['os/encerradas']);
      }else {
        this.router.navigate(['os']);
      }
    });
  };
}
