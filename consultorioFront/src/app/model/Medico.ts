import {Especialidade} from '../model/Especialidade';
export class Medico{
  id!: number;
  crm!:number
  nome!:string;
  especialidade!: Especialidade;
  telefone!:string;
  email!:string;
}
