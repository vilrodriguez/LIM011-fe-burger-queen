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
      this.result = [...this.currentproduct.reduce( (arr, objectSelected) => {
      const key = JSON.stringify([objectSelected.product, objectSelected.price]);
      if (!arr.has(key)) arr.set(key, { ...objectSelected, quantity: 0  });
      arr.get(key).quantity++;
      return arr;
      }, new Map).values()];
      console.log(this.result);
      this.result.forEach((element) => {
        return this.orderedItem = element;
      })
    })
  }
ngOnInit(): void {
  }
}
