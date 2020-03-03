import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';
import { HeaderComponent } from './components/header/header.component';
import { MenuLinksComponent } from './components/menu-links/menu-links.component';
import { MenuBreakfastComponent } from './components/menu-breakfast/menu-breakfast.component';
import { MenuLunchComponent } from './components/menu-lunch/menu-lunch.component';
import { MenuDrinksComponent } from './components/menu-drinks/menu-drinks.component';
import { MenuSideDishesComponent } from './components/menu-side-dishes/menu-side-dishes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuLinksComponent,
    MenuBreakfastComponent,
    MenuLunchComponent,
    MenuDrinksComponent,
    MenuSideDishesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    // AngularFireAuthModule, // auth
    AngularFireStorageModule // storage

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
