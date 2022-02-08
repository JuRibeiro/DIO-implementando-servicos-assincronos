import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = "Juliana Ribeiro";
  imageUrl = "https://picsum.photos/id/237/200/300";
  imageDesc = "imagem de um doguinho";
  buttonText = "Clique aqui";
  textRed = false;
  bgColor = "green";
  textInput = " ";
  number = 0;
  destroi = false;

  constructor() { }

  ngOnInit(): void {
  }

  clicou(value: any)
  {
   /*  this.text = "Juliana" */
    console.log('clicou aq', value);
    this.textRed = true;
  }

  clicouNoFIlho(text: any)
  {
    console.log(text)
  }

  incremento()
  {
    this.number++;
  }

  destroiComponente()
  {
    this.destroi = true;
  }
}
