import { FirebaseService, UserInfo } from './../firebase.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
  ]
})
export class HomePage {

  users: Observable<UserInfo[]>;

  constructor(public firebase: FirebaseService , public navCtrl: NavController) {

  }

  ionViewWillEnter() {
    this.users = this.firebase.getUsers();
  }


  deleteUser(user: UserInfo) {
    this.firebase.deleteUser(user.id);
  }

  addUser() {
    this.firebase.addUser({ name: "carlos", age: 32, doc: "123123", type: "admin" }).then((result) => {
      console.log("RESULT", result);

    }).catch((error) => {

    });
  }

}
