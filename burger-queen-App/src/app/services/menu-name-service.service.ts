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
  
  changeProduct(obj){
    let newArrOrder:any;
    // console.log(this.arrOrder.value);
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    // console.log(findProduct);
    if (findProduct === undefined){
    newArrOrder = this.arrOrder.value.concat(obj);
    } else {
      newArrOrder = this.arrOrder.value.map((element) =>{
        let newObj:{};
        // console.log(element)
        if (element.product === obj.product){
          newObj = {product: element.product, price: element.price, quantity: element.quantity+1};
          return newObj;
        } else {
          return element;
        }
      })
    }
    console.log(newArrOrder);
    // newArrOrder = this.arrOrder.value.concat(obj);
    this.arrOrder.next(newArrOrder);
  }

}

// 