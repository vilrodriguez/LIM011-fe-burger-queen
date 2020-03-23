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

  
  //return array of object with customer order
  private arrOrder = new BehaviorSubject([]);
  currentProduct = this.arrOrder.asObservable();

  changeProduct(obj){
    let newArrOrder:any;
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    if (findProduct === undefined){
    newArrOrder = this.arrOrder.value.concat(obj);
    } else {
      newArrOrder = this.arrOrder.value.map((element) =>{
        let newObj:{};
        if (element.product === obj.product){
          newObj = {product: element.product, price: element.price, quantity: element.quantity+1};
          
          return newObj;
        } else {
          return element;
        }
      })
    }
    this.arrOrder.next(newArrOrder);
  }
  
 
  private arrOrdertoReduceProduct = new BehaviorSubject([]);
  currentProductsToreduceFrom = this.arrOrder.asObservable();
  reduceProductOrder(obj){
    let newArrOrder=[];
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    if (findProduct === undefined){
    newArrOrder = this.arrOrder.value;
    } else {
      this.arrOrder.value.forEach((element) =>{
        let newObj:{};
        if (element.product === obj.product){
          if (element.quantity > 1){
            newObj = {product: element.product, price: element.price, quantity: element.quantity-1};
            newArrOrder.push(newObj);
          }
        } else {
         newArrOrder.push(element);
        }
      });
    }
    this.arrOrder.next(newArrOrder);
  }

  deleteProductOrder(obj){
    let newArrOrder:any;
    const findProduct = this.arrOrder.value.find(element => 
      element.product === obj.product);
      newArrOrder = this.arrOrder.value.concat(!obj === findProduct);
      console.log(newArrOrder);
    this.arrOrder.next(newArrOrder);
    }
  }