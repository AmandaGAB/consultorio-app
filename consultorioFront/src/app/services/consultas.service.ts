import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Paciente} from "../model/Paciente";
import {Observable} from "rxjs";
import {Consulta} from "../model/Consulta";

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {
  URL_CONSULTAS = 'http://localhost:8080/consultas';
  constructor(private  httpClient: HttpClient) {

  }
  inserir(consulta: Consulta): Observable<Consulta>{
    return this.httpClient.post<Consulta>(this.URL_CONSULTAS, consulta)
  }
}
