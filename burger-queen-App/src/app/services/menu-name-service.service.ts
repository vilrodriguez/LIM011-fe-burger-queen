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

  private selectedProduct = new BehaviorSubject({});
  currentProduct = this.selectedProduct.asObservable();
  changeProduct(value){
    return this.selectedProduct.next(value);
  }

}

