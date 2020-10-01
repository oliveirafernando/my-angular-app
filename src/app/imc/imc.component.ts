import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../model/Pessoa';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  imcForm = new FormGroup({
    nomeInput: new FormControl(),
    pesoInput: new FormControl(),
    alturaInput: new FormControl(),
  });

  pessoas: Pessoa[] = [];

  constructor() {}

  ngOnInit() {}

  cadastrarPessoa() {
    const result = this.imcForm.value;
    const pessoa: Pessoa = {
      nome: result.nomeInput,
      peso: result.pesoInput,
      altura: result.alturaInput,
      imc: this.calcularImc(+result.pesoInput, +result.alturaInput),
    };
    this.pessoas.push(pessoa);
    this.imcForm.reset();
  }

  private calcularImc(peso: number, altura: number): number {
    return peso / (altura * altura);
  }
}
