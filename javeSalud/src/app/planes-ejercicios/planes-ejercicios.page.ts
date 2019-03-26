import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Dieta } from '../modelos/dieta';  
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-planes-ejercicios',
  templateUrl: './planes-ejercicios.page.html',
  styleUrls: ['./planes-ejercicios.page.scss'],
})
export class PlanesEjerciciosPage implements OnInit {

  listaEjerciciosRef$: Observable<any[]>
  constructor(public navCtrl: NavController, private database: AngularFireDatabase) {
    this.listaEjerciciosRef$ = this.database.list('ejercicios').valueChanges();  
  }

  ngOnInit() {
  }

  atras(){
    this.navCtrl.navigateForward('userhome');
  }

}
