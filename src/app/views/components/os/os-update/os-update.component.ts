import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/clientes';
import { Os } from 'src/app/models/os';
import { Tecnico } from 'src/app/models/tecnicos';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent {

  constructor(
    private service: OsService,
    private router: Router,
    private tecservice : TecnicoService,
    private cliservice : ClienteService,
    private route: ActivatedRoute,
    ){}
    
    os_id ='';

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
      this.os_id  = this.route.snapshot.paramMap.get('id')!;
      this.findById();  
      this.carregarTecnicos();
      this.carregarCliente();
    }
  
    update():void{
      this.service.uptade(this.os).subscribe(resposta =>{
        this.router.navigate(['os'])
      })
    }

    cancelar(){
      this.router.navigate(['os'])
    }
  
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

     findById():void{
      this.service.findById(this.os_id).subscribe((resposta) =>{
        this.os = resposta;
        this.converteDados();
      });
    }

    converteDados(): void{
      if(this.os.status == 'ABERTO'){
        this.os.status = 0
      } else if (this.os.status == 'ANDAMENTO'){
        this.os.status = 1
      }else {
        this.os.status = 2
      } 
      if(this.os.prioridade == 'BAIXA'){
        this.os.prioridade = 0
      } else if (this.os.prioridade == 'MEDIA'){
        this.os.prioridade = 1
      }else {
        this.os.prioridade = 2
      } 
    }

  }
  
  
  