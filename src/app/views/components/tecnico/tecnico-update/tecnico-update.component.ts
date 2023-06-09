import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from 'src/app/models/tecnicos';
import { TecnicoService } from 'src/app/services/tecnico.service';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit{

  id_tec = '';

  tecnico: Tecnico = {
    id : '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  constructor(
    private router: Router,
    private service: TecnicoService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
      this.id_tec = this.route.snapshot.paramMap.get('id')!;
      this.findById();  
  }

  update():void{
    this.service.uptade(this.tecnico).subscribe((resposta) =>{
      this.router.navigate(['/tecnicos']);
      this.service.message('Tecnicos atualizado com sucesso');
    },err => {
      if (err.error.message.match('já cadastrado')   ) {
        this.service.message(err.error.message);
      } else if (err.error.errors[0].message === 'invalid Brazilian individual taxpayer registry number (CPF)'){
        this.service.message('CPF invalido!');
      }
    });
  }
    

  findById():void{
    this.service.findById(this.id_tec).subscribe((resposta) =>{
      this.tecnico = resposta;
    });
  }

  nome = new FormControl('' , Validators.minLength(5));
  cpf = new FormControl('' , Validators.minLength(11));
  telefone = new FormControl('' , Validators.minLength(11));

  
  cancelar(): void {
    this.router.navigate(['/tecnicos']);
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
