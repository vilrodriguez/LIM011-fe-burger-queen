import { Component, OnInit } from "@angular/core";
import { MenuNameService } from "src/app/services/menu-name-service.service";

@Component({
  selector: "app-customer-request",
  templateUrl: "./customer-request.component.html",
  styleUrls: ["./customer-request.component.scss"]
})
export class CustomerRequestComponent implements OnInit {
  currentproduct: any;
  orderedItem: any;
  result: any;
  constructor(private menuNameService: MenuNameService) {
    this.menuNameService.currentProduct.subscribe(obj => {
      this.currentproduct = obj;
      // funcion que  cuenta los elementos repetidos y retorna un obj con la cantidad de cada unidad
      this.result = [
        ...this.currentproduct
          .reduce((arr, objectSelected) => {
            const key = JSON.stringify([
              objectSelected.product,
              objectSelected.price
            ]);
            if (!arr.has(key)) arr.set(key, { ...objectSelected, quantity: 0 });
            arr.get(key).quantity++;
            return arr;
          }, new Map())
          .values()
      ];
      console.log(this.result);
      // this.currentproduct.forEach((element)
      this.result.forEach(element => {
        return (this.orderedItem = element);
      });
    });
  }
  ngOnInit(): void {}
}
