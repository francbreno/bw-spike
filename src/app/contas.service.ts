import { Injectable } from '@angular/core';

@Injectable()
export class ContasService {
  contas = [
    {
      id: 1,
      nome: 'Casa',
      saldo: 900,
      contas: [
        {
          id: 3,
          nome: 'Aluguel',
          saldo: 0,
          responsabilidades: [
            {
              id: 1,
              valor: 1000
            }
          ]
        },
        {
          id: 4,
          nome: 'Condomínio',
          saldo: 0,
          responsabilidades: [
            {
              id: 2,
              valor: 400
            }
          ]
        },
        {
          id: 2,
          nome: 'Energia Elétrica',
          saldo: 0,
          responsabilidades: []
        }
      ]
    },
    {
      id: 99,
      nome: 'Saúde',
      saldo: 2000,
      contas: []
    },
    {
      id: 3,
      nome: 'Aluguel',
      saldo: 0,
      responsabilidades: [
        {
          id: 1,
          valor: 1000
        }
      ]
    },
    {
      id: 4,
      nome: 'Condomínio',
      saldo: 0,
      responsabilidades: [
        {
          id: 2,
          valor: 400
        }
      ]
    },
    {
      id: 2,
      nome: 'Energia Elétrica',
      saldo: 0,
      responsabilidades: []
    }
  ];

  constructor() { }

  getContas() {
    return this.contas;
  }

  getContasMaster() {
    return this.contas.filter((conta:any) => conta.contas);
  }

  getConta(id) {


    console.log(this.contas);
    console.log(this.contas.find((conta, index, array) => conta.id === id));
    return this.contas.find(conta => String(conta.id) === id);
  }
}
