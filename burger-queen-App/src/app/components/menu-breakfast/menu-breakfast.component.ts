import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { FirestoreService } from "../../services/firestore.service";

@Component({
  selector: "app-menu-breakfast",
  templateUrl: "./menu-breakfast.component.html",
  styleUrls: ["./menu-breakfast.component.scss"]
})
export class MenuBreakfastComponent implements OnInit {
  public menuItems = [];
  constructor(private db: FirestoreService) {
    /*    this.db.getDataByCategory()
    .subscribe((data) => {
      console.log(data)
    }) */
  }

  ngOnInit() {}
}
