import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  templateUrl: './menu-links.component.html',
  styleUrls: ['./menu-links.component.scss']
})
export class MenuLinksComponent implements OnInit {
  breakfastButton: string;
  lunchButton: string;
  drinksButton: string;
  sideDishesButton: string;
  constructor() { 
    this.breakfastButton = 'D',
    this.lunchButton = 'P',
    this.drinksButton = 'B',
    this.sideDishesButton = 'A'
  }

  evento(name){
    console.log(name);
    
  }

  ngOnInit(): void{
  } 

}
