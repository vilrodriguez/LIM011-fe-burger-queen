import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/services/menu-name-service.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.scss']
})

export class CustomerRequestComponent implements OnInit {
  currentproduct: any;
  constructor(private menuNameService: MenuNameService) { 
    this.menuNameService.currentProduct.subscribe(obj =>{
      this.currentproduct = obj;
      console.log(obj);
  })
  }

ngOnInit(): void {
  }
}
