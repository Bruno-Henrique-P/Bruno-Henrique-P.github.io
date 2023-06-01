import { AfterViewInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Os } from 'src/app/models/os';
import { ClienteService } from 'src/app/services/cliente.service';
import { OsService } from 'src/app/services/os.service';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements AfterViewInit {

  os : Os[] = []

  displayedColumns: string[] = ['tecnico', 'cliente', 'status','prioridade','dataAbertura' , 'actions'];
  dataSource = new MatTableDataSource<Os>(this.os);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor ( 
    private service : OsService,
    private router : Router,
    private tecniosService : TecnicoService,
    private clienteService: ClienteService
    ){}

    ngAfterViewInit() {
    
      this.findAll();
    }

    findAll(){
      this.service.findAll().subscribe((resposta) =>{
        resposta.forEach(item =>{
          if(!(item.status == 'ENCERRADO')){
          this.os.push(item);
          };
        });
        this.listaTecnicos();
        this.listaCliente(); 
        this.dataSource = new MatTableDataSource<Os>(this.os);
        this.dataSource.paginator = this.paginator;
      });
    }

    listaTecnicos() : void{
      this.os.forEach(x =>{
        this.tecniosService.findById(x.tecnico).subscribe(resposta =>{
          x.tecnico = resposta.nome
        })
      })
    }

    listaCliente() : void{
      this.os.forEach(x =>{
        this.clienteService.findById(x.cliente).subscribe(resposta =>{
          x.cliente = resposta.nome
        })
      })
    }

    mudarcor(x:any){
        if (x == 'ABERTO'){
          return 'green'
        } else if (x == 'ANDAMENTO'){
          return 'yellow';
        } else {
          return 'red' ;
        }
    }

    mudarCorProi(x:any){
      if (x == 'BAIXA'){
        return 'green'
      } else if (x == 'MEDIA'){
        return 'yellow';
      } else {
        return 'red' ;
      }
    }

    navigateToCreate():void{
      this.router.navigate(['os/create']);
    }
}
