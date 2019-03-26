import { Component, OnInit } from '@angular/core';

import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modelos/usuario';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {

  constructor(public router: Router,private database: AngularFireDatabase,private route: ActivatedRoute,private menu: MenuController,public navCtrl: NavController) { }

  ngOnInit() {
  }

  atras(){
    this.navCtrl.navigateForward('nutricion');
  }

  ejerciciosClick(){
    this.navCtrl.navigateForward('planes-ejercicios');
  }

}
