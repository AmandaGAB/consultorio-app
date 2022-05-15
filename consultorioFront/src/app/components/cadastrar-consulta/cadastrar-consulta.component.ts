import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/model/Consulta';
import {Especialidade} from "../../model/Especialidade";
import {Medico} from "../../model/Medico";
import {MedicoService} from "../../services/medico.service";
import {Paciente} from "../../model/Paciente";
import {PacienteService} from "../../services/paciente.service";


@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.scss']
})
export class CadastrarConsultaComponent implements OnInit {
  consulta: Consulta = new Consulta();
  conditionalOperator = Array<Medico>();
  medicos = Array<Medico>();
  pacientes = Array<Paciente>();
  listaMedicos: any
  listaPacientes: any
  constructor(private MedicoService: MedicoService, private  PacienteService: PacienteService) { }

  ngOnInit(): void {
  this.listaMedicos = this.MedicoService.listar().subscribe(
    p => this.medicos = p
  )
    this.listaPacientes = this.PacienteService.listar().subscribe(
      p => this.pacientes = p
    )
  }
salvar(): void{

}


}
