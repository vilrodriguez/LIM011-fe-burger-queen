import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private probandoEstaVaina  = new BehaviorSubject('');
  probando = this.probandoEstaVaina.asObservable();
  constructor() { }
  

}
