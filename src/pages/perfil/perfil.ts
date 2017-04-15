import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {LoginProvider} from "../../providers/login-provider";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider:LoginProvider) {
  }

  ionViewDidLoad(){
    this.loginProvider.loginSucessEventEmitter.subscribe(
      state => this.navCtrl.setRoot(HomePage)
    )
    this.loginProvider.loginErrorEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  logout(){
    this.loginProvider.logout();
  }
}
