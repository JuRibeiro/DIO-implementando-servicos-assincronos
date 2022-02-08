import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = 'clique';
  @Output() clickChildren = new EventEmitter;
  textFilho = "clicou no filho"

  constructor() { }

  ngOnInit(): void {
  }

  clicou()
  {
   this.clickChildren.emit(this.textFilho);
  }

}
