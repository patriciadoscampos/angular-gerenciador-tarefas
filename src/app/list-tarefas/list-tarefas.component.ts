import { Component, OnInit } from '@angular/core';
import { Tarefas } from './tarefas';

@Component({
  selector: 'app-list-tarefas',
  templateUrl: './list-tarefas.component.html',
  styleUrls: ['./list-tarefas.component.css']
})
export class ListTarefasComponent implements OnInit {
  pageTitle = 'Lista de Tarefas!';

  // originalTarefas: Tarefas = {
  //   id: null,
  //   nome: null,
  //   data: null,
  //   check: null
  // };

  // tarefas : Tarefas = { ...this.originalTarefas };

  tarefas: any[]=[
    {
      "id": 1,
      "nome": "Entregar Relatório de Estágio",
      "data": "19/09/2019",
      "check": false
    },
    {
      "id": 2,
      "nome": "Palestra sobre Novas Tecnologias",
      "data": "25/09/2019",
      "check": false
    },
    {
      "id": 3,
      "nome": "Apresentação de Trabalho",
      "data": "02/10/2019",
      "check": false
    },
    {
      "id": 4,
      "nome": "Entrevista de Emprego",
      "data": "04/10/2019",
      "check": false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
