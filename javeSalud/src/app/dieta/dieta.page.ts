import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular'; 
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dieta',
  templateUrl: './dieta.page.html',
  styleUrls: ['./dieta.page.scss'],
})
export class DietaPage implements OnInit {

  listaDietasRef$: Observable<any[]>
  constructor(public navCtrl: NavController, private database: AngularFireDatabase) { 
    this.listaDietasRef$ = this.database.list('dietas').valueChanges();
  }

  ngOnInit() {
    
  }

  atras(){
    this.navCtrl.navigateForward('nutricion');
  }

}
