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
    "ProductId":1,
    "ProductName":"Fridge",
    "ProductCode":"5555",
    "ProductDate":"datetime",
    "ProductDescription": "ALL Products are good",
  },
  {
    "ProductId":2,
    "ProductName":"Fan",
    "ProductCode":"595959",
    "ProductDate":"datetime",
    "ProductDescription": "ALL Products are Great",
  }
  ];
  
  }
}
