import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FirestoreService } from "../../services/firestore.service";
import { MenuNameService } from 'src/app/services/menu-name-service.service';

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"]
})
export class MenuListComponent implements OnInit {
  menuString: string;
  public menuItems = [];
  constructor(private db: FirestoreService, private menuNameService: MenuNameService) {
    this.menuNameService.currentString.subscribe(string =>{
      this.menuString = string;
      console.log(this.menuString);
      
      this.db.getDataByCategory(this.menuString)
    .subscribe((data) => {
      this.menuItems = data;
      console.log(data)});
    });
  }

  ngOnInit() {}
}
