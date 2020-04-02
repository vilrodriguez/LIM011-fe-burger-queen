import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // private itemCollection: AngularFirestoreCollection
  constructor(
    private firestore: AngularFirestore
    // private itemCollection: AngularFirestoreCollection
  ) {}

  getDataByCategory(menuName: string) {
    return this.firestore.collection(menuName).valueChanges();
  }

  sendOrderToKitchen(obj: { customerName: string; tableNumber: number; delivery: boolean; date: any; order: {}; }) {
    // console.log(obj);
    return this.firestore.collection('kitchen').add(obj);
  }
}
