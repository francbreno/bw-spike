import { ContasService } from './contas.service';
import { contasRouting } from './contas-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContaComponent } from './conta/conta.component';
import { DetalhesContaComponent } from './detalhes-conta/detalhes-conta.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContaComponent,
    DetalhesContaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    contasRouting
  ],
  providers: [ContasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
