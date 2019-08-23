import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListTarefasComponent } from './list-tarefas/list-tarefas.component';
import { PseudoFormComponent } from './pseudo-form/pseudo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    PseudoFormComponent,
    ListTarefasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'pseudo-form', component: PseudoFormComponent},
      { path: 'list-tarefas', component: ListTarefasComponent },
      { path: '', redirectTo: 'list-tarefas', pathMatch: 'full' }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
