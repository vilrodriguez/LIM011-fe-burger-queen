import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/services/menu-name-service.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.scss']
})
export class CustomerRequestComponent implements OnInit {
  todaydate: any;
  result: any;
  currentproduct: any;
  orderedItem: any;
  nombreCliente = '';
  constructor(private menuNameService: MenuNameService) {
    this.menuNameService.currentProduct.subscribe(obj => {
      this.currentproduct = obj;
      this.order(this.currentproduct);
      // this.reduceOrder(this.currentproduct);

    });
  }

order(obj) {
    this.result = obj;
    this.result.forEach((element) => {
      return this.orderedItem = element;
    });
}

    reduceProduct(item) {
      const newObj = {product: item.product, price: item.price, quantity: item.quantity};
      // create new obj with all element + quantity
      return this.menuNameService.reduceProductOrder(newObj);
  }

  deleteProduct(item) {
      const newObj = {product: item.product, price: item.price, quantity: item.quantity};
      // create new obj with all element + quantity
      return this.menuNameService.deleteProductOrder(newObj);
  }
  onModificarPersona(event: Event) {
    this.nombreCliente = (<HTMLInputElement>event.target).value;
  }

ngOnInit() {
  this.todaydate = this.menuNameService.todayDate();
  }
}
