import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // private itemCollection: AngularFirestoreCollection
  constructor(private firestore: AngularFirestore) { }

  getDataByCategory(menuName) {
    return this.firestore.collection(menuName).valueChanges();
  }
}

