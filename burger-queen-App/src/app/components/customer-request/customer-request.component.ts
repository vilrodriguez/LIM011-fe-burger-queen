import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/services/menu-name-service.service';


@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.scss']
})
export class CustomerRequestComponent implements OnInit {
  result:any;
  currentproduct:any;
  orderedItem:any;
  constructor(private menuNameService: MenuNameService) { 
    this.menuNameService.currentProduct.subscribe(obj => {
      this.currentproduct = obj;
      this.order(this.currentproduct);
      // this.reduceOrder(this.currentproduct);
      
    })
  }
  order(obj){
  this.result = obj;
      // console.log(this.result);
      this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    }
  reduceProduct(item){
      const newObj = {product:item.product, price: item.price, quantity: item.quantity};
      // create new obj with all element + quantity
    return this.menuNameService.reduceProductOrder(newObj);
   };
   

    deleteProduct(item){
      const newObj = {product:item.product, price: item.price, quantity: item.quantity};
      // create new obj with all element + quantity
    return this.menuNameService.deleteProductOrder(newObj);
    };

    // deleteProductInOrder(obj){
    // this.result = obj;
    //   // console.log(this.result);
    //   this.result.forEach((element) => {
    //     return this.orderedItem = element;
    //   })
    // }
//  substractProduct(obj){
//   this.result = [...obj.reduce( (arr, objectSelected) => {
//       const key = JSON.stringify([objectSelected.product, objectSelected.price, objectSelected.quantity]);
//       if (arr.has(key)) arr.set(key, { ...objectSelected});
//       !arr.get(key);
//       return arr;
//       }, new Map).values()];
//       console.log(this.result);
//       this.result.forEach((element) => {
//         return this.orderedItem = element;
//       })
//     }
  
ngOnInit(): void {
  
  }
}
