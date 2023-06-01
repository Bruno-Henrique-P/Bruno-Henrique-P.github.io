import { Tecnico } from '../models/tecnicos';
import { Cliente } from '../models/clientes';
import { Status } from '../models/status';
import { Prioridade } from '../models/prioridade';



export interface Os{
    id?:any;
    DataAbertura?: any;
    DataFechamento?: any;
    tecnico: any;
    cliente: any;
    observacoes: string;
    status: any;
    prioridade: any;
}