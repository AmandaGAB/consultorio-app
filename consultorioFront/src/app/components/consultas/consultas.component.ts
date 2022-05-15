import { Component, OnInit } from '@angular/core';
import {Consulta} from "../../model/Consulta";
import {Router} from "@angular/router";
import {MensagensService} from "../../services/mensagens.service";
import {ConsultasService} from "../../services/consultas.service"

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {

  consultas = Array<Consulta>();

  displayedColumns: string[] = ['idConsulta', 'dataConsulta', 'especialidade', 'nomeMedico', 'nomePaciente'];

  constructor(private ConsultasService: ConsultasService, private roteador: Router, private mensagemService: MensagensService) {

  }

  ngOnInit(): void {
    this.ConsultasService.listar().subscribe(

      p => this.consultas = p

    )
    console.log(this.consultas);

  }
  //
  // editar(medico: Medico): void {
  //
  //   this.roteador.navigate(['medicos/cadastrar', medico.id])
  //
  // }
  //
  // remover(medico: Medico) : void{
  //
  //   this.MedicoService.remover(Number(medico.id)).subscribe(
  //     resposta => {
  //       const indexUsuarioParaRemover = this.medicos.findIndex(u => u.crm === medico.crm)
  //
  //       if(indexUsuarioParaRemover > -1) {
  //
  //         this.medicos.splice(indexUsuarioParaRemover, 1)
  //         this.mensagemService.error('Médico removido com Sucesso!');
  //         this.ngOnInit()
  //
  //
  //       }
  //
  //     }
  //
  //   )
  //
  // }


}
