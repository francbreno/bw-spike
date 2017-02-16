import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  @Input() conta;

  constructor() { }

  ngOnInit() {
  }

}
