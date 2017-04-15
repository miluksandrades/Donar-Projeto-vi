import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Information } from "../information/information"
import { Caddonate } from "../caddonate/caddonate";
import { Perfil } from "../perfil/perfil";

@Component({
  selector: 'page-donation',
  templateUrl: 'donation.html',
})
export class Donation {

  constructor(public navCtrl: NavController) {
  }

  acessCad(){
    console.log("teste");
    this.navCtrl.push(Caddonate);
  }

  home(){
    this.navCtrl.push(Perfil);
  }

  information(){
    this.navCtrl.push(Information);
  }
}
