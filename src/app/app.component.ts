import { Component, OnInit } from '@angular/core';
import { user } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public method: user) { }
  ngOnInit() {
    
  let users =new user();
users.name="sai";
users.age=25;
users.favouritecolor="Green";
let displayEdit:boolean=false;

function toggleEdit():void{

};
}}
 //export class AppComponent implements OnInit{
//   data:any;
// Prices: any;
// Items: any;
//   ngOnInit():void{
//     this.data=this.getData();

//   title = 'My first App Myapp1';

//   getData(){
//   return[
//     {
//     "PizzaId":1,
//     "PizzaName":"cheese",
//     "PizzaCode":"5555",
//     "PizzaDate":"datetime",
//     "PizzaDescription": "Pizza is good",
//   },
//   {
//     "PizzaId":2,
//     "PizzaName":"peparoni",
//     "PizzaCode":"59595922",
//     "PizzaDate":"datetime",
//     "PizzaDescription": "Pizza is dilicious",
//   }
//   ];
  
//   }
  // export class AppComponent implements OnInit{
  //   public show:boolean = false;
  //   public buttonName:any = 'Show';
  
  //   constructor(){}
  
  //   toggle() {
  //     this.show = !this.show;
  
  //     // CHANGE THE NAME OF THE BUTTON.
  //     if(this.show)  
  //       this.buttonName = "Hide";
  //     else
  //       this.buttonName = "Show";
  //   }
  // }