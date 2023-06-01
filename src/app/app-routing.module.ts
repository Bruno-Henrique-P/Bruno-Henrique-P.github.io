import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './views/components/cliente/cliente-delete/cliente-delete.component';
import { OsAbertasComponent } from './views/components/os/os-abertas/os-abertas.component';
import { OsEncerradasComponent } from './views/components/os/os-encerradas/os-encerradas.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent
  },
  {
    path : 'tecnicos',
    component : TecnicoReadComponent
  },
  {
    path : 'clientes',
    component : ClienteReadComponent
  },
  {
    path : "tecnicos/create",
    component : TecnicoCreateComponent
  },
  {
    path : "clientes/create",
    component : ClienteCreateComponent
  },
  {
    path : "clientes/update/:id",
    component : ClienteUpdateComponent
  },
  {
    path : "clientes/delete/:id",
    component : ClienteDeleteComponent
  },
  {
    path: 'tecnicos/uptade/:id',
    component: TecnicoUpdateComponent
  },
  {
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  },
  {
    path:'os',
    component: OsReadComponent
  },
  {
    path: 'os/create',
    component: OsCreateComponent
  },
  {
    path: 'os/update/:id',
    component: OsUpdateComponent
  },
  {
    path : "os/view/:id",
    component : OsAbertasComponent
  },
  {
    path : "os/encerradas",
    component : OsEncerradasComponent
  },
  {
    path : "os/encerradas/view/:id",
    component : OsAbertasComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
