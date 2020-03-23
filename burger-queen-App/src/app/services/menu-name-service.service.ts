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
        // console.log(element)
        if (element.product === obj.product){
          newObj = {product: element.product, price: element.price, quantity: element.quantity+1};
          return newObj;
        } else {
          return element;
        }
      })
    }
    // console.log(newArrOrder);
    // newArrOrder = this.arrOrder.value.concat(obj);
    this.arrOrder.next(newArrOrder);
  }

  private arrOrdertoReduceProduct = new BehaviorSubject([]);
  currentProductsToreduceFrom = this.arrOrder.asObservable();
  // Uncomment for it to work
  // reduceProductOrder(obj){
  //   let newArrOrder:any;
  //   // console.log(this.arrOrder.value);
  //   const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
  //   if (findProduct === undefined){
  //   newArrOrder = this.arrOrder.value.concat(obj);
  //   } else {
  //     newArrOrder = this.arrOrder.value.map((element) =>{
  //       let newObj:{};
  //       if (element.product === obj.product){
  //         newObj = {product: element.product, price: element.price, quantity: element.quantity-1};
  //         return newObj;
  //       } else {
  //         return element;
  //       }
  //     })
  //   }
  //   this.arrOrder.next(newArrOrder);
  // }
  // deleted product when goes to 0;
  // reduceProductOrder(obj){
  //   let newArrOrder:any;
  //   // console.log(this.arrOrder.value);
  //   const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
  //   if (findProduct === undefined){
  //   newArrOrder = this.arrOrder.value.concat(obj);
  //   } else {
  //     newArrOrder = this.arrOrder.value.map((element) =>{
  //       let newObj:{};
  //       if (element.product === obj.product){
  //         if (element.quantity >= 1){
  //           newObj = {product: element.product, price: element.price, quantity: element.quantity-1};
  //         return newObj;
  //         } 
  //           newArrOrder = this.arrOrder.value.concat(obj);
  //       } else {
  //         return element;
  //       }
  //     })
  //   }
  //   this.arrOrder.next(newArrOrder);
  // }
  reduceProductOrder(obj){
    let newArrOrder:any;
    console.log('rtrtrt', this.arrOrder.value);
    const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
    if (findProduct === undefined){
    newArrOrder = this.arrOrder.value.concat(obj);
    } else {
      newArrOrder = this.arrOrder.value.map((element) =>{
        let newObj:{};
        if (element.product === obj.product){
          if (element.quantity >= 1){
            newObj = {product: element.product, price: element.price, quantity: element.quantity-1};
          return newObj;
          } else if (element.quantity = 0){
            newArrOrder = this.arrOrder.value.concat(obj);
            return newObj;
          }
        } else {
          return element;
        }
      });
    }
    console.log('eee', newArrOrder)
    this.arrOrder.next(newArrOrder);
  }

//  reduceProductOrder(obj){
//     let newArrOrder:any;
//     // console.log(this.arrOrder.value);
//     const findProduct = this.arrOrder.value.find(element => element.product === obj.product);
//     if (findProduct === undefined){
//     newArrOrder = this.arrOrder.value.concat(obj);
//      this.arrOrder.next(newArrOrder);
//       } else {
//         let finalArr:any[];
//         this.arrOrder.value.forEach((element) =>{
//           if (element.product === obj.product){
//             if (element.quantity >=1){
//             let newObj = {product: element.product, price: element.price, quantity: element.quantity-1};
//             finalArr.push(newObj);
//             } 
//           }
//             finalArr.push(element);
//         })
//           this.arrOrder.next(finalArr);

//         }
//  }

  deleteProductOrder(obj){
    let newArrOrder:any;
    // console.log(this.arrOrder.value);
    const findProduct = this.arrOrder.value.find(element => 
      element.product === obj.product);
      newArrOrder = this.arrOrder.value.concat(!obj === findProduct);
      console.log(newArrOrder);
    // newArrOrder = this.arrOrder.value.concat(obj);
    this.arrOrder.next(newArrOrder);
    }
  }



// 