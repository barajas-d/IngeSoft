import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavController, ActionSheetController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList, snapshotChanges } from 'angularfire2/database';
import { database } from 'firebase';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Dieta } from '../modelos/dieta';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-nutricionadmin',
  templateUrl: './nutricionadmin.page.html',
  styleUrls: ['./nutricionadmin.page.scss'],
})
export class NutricionadminPage implements OnInit {

  dieta = {} as Dieta;

  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
   
  constructor(public router: Router,public storage: Storage,public navCtrl: NavController, private database: AngularFireDatabase, private actionSheet: ActionSheetController) { 

    this.itemsRef = database.list('dieta');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {
  }
  atras(){
    this.navCtrl.navigateForward('adminhome');
  }
  swipeAll(event){
    if (event.direction == 2) {
      console.log('Swipe All', event);//direction 2 = right to left swipe.
    } 
  }
  agregarDieta(dieta:Dieta){
    this.itemsRef.push(dieta);
  }
  eliminar(dieta:Dieta){
      const itemsRef = this.database.list('dieta');
     
    }

    async elementoSeleccionado(dieta:Dieta,key:string){
      const action = await this.actionSheet.create({
        header:`${dieta.descripcion}`,
        buttons: [
          {
            text: 'Editar',
            handler: () => {
              this.router.navigate(['/nutricioneditardieta',{ dietaID: key}]);
            }

          },{
            text: 'Eliminar',
            role: 'destructive',
            handler: () =>{
              this.itemsRef.remove(key);
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () =>{
              console.log("El usuario ha cancelado la petición");
            }
          }
        ]
      });
      await action.present();
    }
}
