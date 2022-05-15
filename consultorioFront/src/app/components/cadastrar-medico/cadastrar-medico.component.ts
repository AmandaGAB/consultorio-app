import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MedicoService} from "../../services/medico.service";
import {Medico} from "../../model/Medico";
import {Especialidade} from "../../model/Especialidade";

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.scss']
})
export class CadastrarMedicoComponent implements OnInit {
  medico: Medico = new Medico();
  operacaoCadastro = true;
  conditionalOperator = Especialidade;
  especialidades: string[];
  constructor(private  MedicoService: MedicoService, private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.medico = new Medico();
    this.especialidades = Object.keys(this.conditionalOperator);
    if(this.rotaAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      this.MedicoService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.medico = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirMedico(): void{

    if(this.medico.id) {
      this.MedicoService.atualizar(this.medico).subscribe(medico => {
        console.log(medico);
        this.roteador.navigate(['medicos']);
      })

    } else {
      this.MedicoService.inserir(this.medico).subscribe(medico => {
        console.log(medico);
        this.roteador.navigate(['medicos']);
      })
      this.medico = new Medico();

    }


  }


}
