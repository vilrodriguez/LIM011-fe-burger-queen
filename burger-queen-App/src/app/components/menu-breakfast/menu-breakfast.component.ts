import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-menu-breakfast',
  templateUrl: './menu-breakfast.component.html',
  styleUrls: ['./menu-breakfast.component.scss']
})
export class MenuBreakfastComponent implements OnInit {


  constructor( private db: AngularFirestore) {
    const breakfast = this.db.collection('breakfast').valueChanges()
    console.log(breakfast);
    
   }

  ngOnInit(): void {
  }

}
