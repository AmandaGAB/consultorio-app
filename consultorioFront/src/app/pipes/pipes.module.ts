import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfPipe } from './cpf.pipe';
import { TelefonePipe } from './telefone.pipe';
import { MaiusculoPipe } from './maiusculo.pipe';



@NgModule({
    declarations: [
        CpfPipe,
        TelefonePipe,
        MaiusculoPipe
    ],
  exports: [
    CpfPipe,
    TelefonePipe,
    MaiusculoPipe
  ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
