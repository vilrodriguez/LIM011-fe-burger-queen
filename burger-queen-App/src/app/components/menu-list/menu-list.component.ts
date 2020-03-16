import { Component, OnInit } from "@angular/core";
import { FirestoreService } from "../../services/firestore.service";
import { MenuNameService } from '../../services/menu-name-service.service';

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})

export class MenuListComponent implements OnInit {
  menuString: string;
  menuNameToShow: string;
  public menuItems = [];
  constructor(private db: FirestoreService, private menuNameService: MenuNameService) {
    this.menuNameService.currentString.subscribe(string =>{
      this.menuString = string;
      this.db.getDataByCategory(this.menuString)
    .subscribe((data) => {
       if (this.menuString === 'breakfast'){
        this.menuNameToShow = 'DESAYUNO';
      } 
      else if (this.menuString === 'lunch'){
        this.menuNameToShow = 'PLATOS';
      }
      else if (this.menuString === 'sideDishes'){
        this.menuNameToShow = 'ACOMPAÑANTES';
      } 
      else if (this.menuString === 'drinks'){
       this.menuNameToShow = 'bebidas';
      }
    return (this.menuItems = data) && (this.menuNameToShow);
      });
    });
  }
  getCustomerRequest(item){
    const object = item;
   return this.menuNameService.changeProduct(object);
  }
  ngOnInit() {
    
  }
}
