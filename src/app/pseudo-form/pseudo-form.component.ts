import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../list-tarefas/tarefas';

@Component({
  selector: 'app-pseudo-form',
  templateUrl: './pseudo-form.component.html',
  styleUrls: ['./pseudo-form.component.css']
})
export class PseudoFormComponent implements OnInit {

  tarefaNome: '';
  cadastrarTarefas(): string{
    if(this.tarefaNome.this().length === 0){
      return;
    }
    this.cadastrarTarefas.push({
      titulo: this.tarefaNome
    })
  }

  constructor() { }

  ngOnInit() {
  }

}
