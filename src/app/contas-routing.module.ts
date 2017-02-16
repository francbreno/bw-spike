import { DetalhesContaComponent } from './detalhes-conta/detalhes-conta.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const contasRouting: ModuleWithProviders = RouterModule.forRoot([
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contas/:id', component: DetalhesContaComponent}
], {useHash: true});