import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NavController, ActionSheetController } from '@ionic/angular';
import { AngularFireDatabase, AngularFireList, snapshotChanges, AngularFireAction } from 'angularfire2/database';
import { database } from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Dieta } from '../modelos/dieta';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-verplatosdietauser',
  templateUrl: './verplatosdietauser.page.html',
  styleUrls: ['./verplatosdietauser.page.scss'],
})
export class VerplatosdietauserPage implements OnInit {
  dieta = {} as Dieta;
  nombre;
  key;
  rol;
  email;
  listaPlatosRef$: Observable<any[]>
  constructor(public router: Router,private route: ActivatedRoute,public storage: Storage,public navCtrl: NavController, private database: AngularFireDatabase) {   
    let sub = this.route.params.subscribe(params => {
      this.key= params['dietaID'];
      this.rol=params['rol'];
      this.email=params['email'];
    });
    console.log(this.key);
    console.log(this.rol);
    this.listaPlatosRef$ = this.database.list('dieta/'+this.key+'/platos').valueChanges();

  }
  ngOnInit() {
  }
  atras(){
    this.router.navigate(['/nutricion',{ userEmail:this.email}]);
  }
}
