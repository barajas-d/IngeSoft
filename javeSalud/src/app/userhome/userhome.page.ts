import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../modelos/usuario';
import { AngularFireDatabaseModule, AngularFireList, AngularFireDatabase, AngularFireAction } from 'angularfire2/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
  emaile;
  usuario = {} as User;

  itemsRefUsuario: AngularFireList<any>;
  itemsUsuario: Observable<any[]>;

  usuario$: Observable<AngularFireAction<firebase.database.DataSnapshot>[]>;
  email$: BehaviorSubject<string|null>;

  constructor(public router: Router,private database: AngularFireDatabase,private route: ActivatedRoute,private menu: MenuController,public navCtrl: NavController) { 
    let sub = this.route.params.subscribe(params => {
      this.emaile = params['userEmail'];
       console.log(params['userEmail']); 
     });
     this.usuario.email=this.emaile;

    
    
    this.email$ = new BehaviorSubject(null);
    this.usuario$ = this.email$.pipe(
      switchMap(email => 
        database.list('/usuario', ref =>
         email ? ref.orderByChild('email').equalTo(email) : ref
        ).snapshotChanges()
      )
    );
    
    this.email$.next(this.usuario.email);
    
    console.log(this.email$.getValue());
    console.log(this.usuario$);

     this.itemsRefUsuario = database.list('usuario');
     this.itemsUsuario = this.itemsRefUsuario.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  ngOnInit() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  nutricionClick(){
    this.navCtrl.navigateForward('nutricion');
  }
  ejerciciosClick(){
    this.navCtrl.navigateForward('planes-ejercicios');
  }
  micuentaClick(){
    this.router.navigate(['/micuenta',{ userEmail: this.usuario.email}]);
  }
  salir(){
    this.navCtrl.navigateForward('login');
  }
}
