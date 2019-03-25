import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {

  constructor(private menu: MenuController,public navCtrl: NavController) { }

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
    this.navCtrl.navigateForward('nutricionadmin');
  }
  salir(){
    this.navCtrl.navigateForward('login');
  }
}
