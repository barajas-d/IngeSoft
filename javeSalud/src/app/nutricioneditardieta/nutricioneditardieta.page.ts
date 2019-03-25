import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { NavController, ActionSheetController, NavParams } from '@ionic/angular';
import { Dieta } from '../modelos/dieta';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-nutricioneditardieta',
  templateUrl: './nutricioneditardieta.page.html',
  styleUrls: ['./nutricioneditardieta.page.scss'],
})
export class NutricioneditardietaPage implements OnInit {
  dieta = {} as Dieta;

   key;
   itemsRef: AngularFireList<any>;
   items: Observable<any[]>;
   listaDietasRef$: Observable<any[]>;

  constructor(private route: ActivatedRoute,public storage: Storage,public navCtrl: NavController, private database: AngularFireDatabase) { 

    
    this.itemsRef = database.list('dieta');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    let sub = this.route.params.subscribe(params => {
     this.key = params['dietaID'];
      console.log(params['dietaID']); 
    });
    //this.listaDietasRef$ = this.database.list('dieta/'+dietaID).valueChanges();
  }

  ngOnInit() {
  }

  actualizardieta(dieta:Dieta){
    this.itemsRef.update(this.key,dieta);
  }
  volver(){
    this.navCtrl.navigateForward('nutricionadmin');
  }
}
