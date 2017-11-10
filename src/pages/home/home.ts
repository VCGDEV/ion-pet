import {Component, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import {EnvironmentVariables} from "../../environment/environment.token";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {SesionManagerService} from "../../service/sesion.manager.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              @Inject(EnvironmentVariables)public environment,
              private facebook:Facebook,
              public session:SesionManagerService) {

  }

  facebookLogout(){
    this.facebook.logout().then(()=>this.session.userProfile = null)
      .catch(error=>console.log(error));
  }

}
