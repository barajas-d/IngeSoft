import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Dieta } from '../modelos/dieta';  
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nutricion',
  templateUrl: './nutricion.page.html',
  styleUrls: ['./nutricion.page.scss'],
})
export class NutricionPage implements OnInit {

  listaDietasRef$: Observable<any[]>
  constructor(public navCtrl: NavController, private database: AngularFireDatabase) { 
    this.listaDietasRef$ = this.database.list('dieta').valueChanges();
  }

  ngOnInit() {
  }
  atras(){
    this.navCtrl.navigateForward('userhome');
  }
}
