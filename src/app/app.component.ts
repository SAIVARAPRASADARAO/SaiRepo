import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  data:any;
Prices: any;
Items: any;
  ngOnInit():void{
    this.data=this.getData();
  }

  title = 'My first App Myapp1';

  getData(){
  return[
    {
    "PizzaId":1,
    "PizzaName":"cheese",
    "PizzaCode":"5555",
    "PizzaDate":"datetime",
    "PizzaDescription": "ALL Products are good",
  },
  {
    "PizzaId":2,
    "PizzaName":"peparoni",
    "PizzaCode":"595959",
    "PizzaDate":"datetime",
    "PizzaDescription": "ALL Products are Great",
  }
  ];
  
  }
}
