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
      this.reduceOrder(this.currentproduct);
      // this.substractProduct(this.currentproduct);
    })
  }
  order(obj){
  this.result = obj;
      // console.log(this.result);
      this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    }

    reduceOrder(obj){
    this.result = obj;
      // console.log(this.result);
      this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    }
 substractProduct(obj){
  this.result = obj;
      this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    }
  
ngOnInit(): void {
  
  }
}
