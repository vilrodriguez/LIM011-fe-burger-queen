import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuNameService {
  private menuNameSource = new BehaviorSubject('breakfast');
  currentString = this.menuNameSource.asObservable();
  constructor() { }
  changeString(value){
    this.menuNameSource.next(value);
  }
  todayDate(){
    let ndate = new Date();
    return ndate;
  }

  private arrOrder = new BehaviorSubject([]);
  currentProduct = this.arrOrder.asObservable();
  result:any;
  currentproduct:any;
  orderedItem:any;

  changeProduct(obj){
    console.log('object???', obj.product);
    const newArrOrder = this.arrOrder.value.concat(obj);
    console.log(newArrOrder); 
    this.arrOrder.next(newArrOrder);
          
  }
  /* order(obj){
  this.result = [...obj.reduce( (arr, objectSelected) => {
      const key = JSON.stringify([objectSelected.product, objectSelected.price]);
      if (!arr.has(key)) arr.set(key, { ...objectSelected, quantity: 0  });
      arr.get(key).quantity++;
      return arr;
      }, new Map).values()];
        this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    } */

}

