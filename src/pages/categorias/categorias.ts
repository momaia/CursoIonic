import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { API_CONFIG } from '../../config/api.config';
import { CategoriaDTO } from '../../models/categoria.dto';
import { CategoriasService } from '../../services/domain/categoriasService';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaService: CategoriasService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
    this.categoriaService.findAll().subscribe(response => {
      this.items = response;
    },
      error => {})
  }

}
