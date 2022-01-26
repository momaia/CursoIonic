import { Component } from "@angular/core";
import { MenuController } from "ionic-angular";
import { IonicPage, NavController } from "ionic-angular";
import { createLogicalNot } from "typescript";
import { CredenciaisDTO } from "../../models/CredenciaisDTO.dto";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {

  creds : CredenciaisDTO = {
    email : "",
    senha : ""
  };

  constructor(public navCtrl: NavController, public menu: MenuController) {
  }
  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

  login() {
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage');
  }
}
