import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // private itemCollection: AngularFirestoreCollection
  constructor(private firestore: AngularFirestore) { }

  getDataByCategory(menuName:string) {
    return this.firestore.collection(menuName).valueChanges();
  }
}

