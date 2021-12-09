import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { createLogicalNot } from "typescript";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  constructor(public navCtrl: NavController) { }

  login() {
    this.navCtrl.setRoot('CategoriasPage');
  }
}
