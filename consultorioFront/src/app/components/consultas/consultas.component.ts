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

  displayedColumns: string[] = ['idConsulta', 'dataConsulta', 'especialidade', 'nomeMedico', 'nomePaciente', 'opções'];

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
  remover(consulta: Consulta) : void{

    this.ConsultasService.remover(Number(consulta.idConsulta)).subscribe(
      resposta => {
        const indexUsuarioParaRemover = this.consultas.findIndex(u => u.idConsulta === consulta.idConsulta)

        if(indexUsuarioParaRemover > -1) {

          this.consultas.splice(indexUsuarioParaRemover, 1)
          this.mensagemService.error('Consulta removido com Sucesso!');
          this.ngOnInit()


        }

      }

    )

  }


}
