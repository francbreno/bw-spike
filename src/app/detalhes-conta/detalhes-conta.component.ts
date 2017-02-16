import { ContasService } from '../contas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-conta',
  templateUrl: './detalhes-conta.component.html',
  styleUrls: ['./detalhes-conta.component.css']
})
export class DetalhesContaComponent implements OnInit {
  conta: any;

  constructor(
    private contasService: ContasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.conta = this.contasService.getConta(id);
  }

}
