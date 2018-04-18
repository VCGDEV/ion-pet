import {Component, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import {EnvironmentVariables} from "../../environment/environment.token";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {SessionManagerService} from "../../service/session.manager.service";
import {WelcomePage} from "../welcome-page/welcome.page";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              @Inject(EnvironmentVariables)public environment,
              private facebook:Facebook,
              public session:SessionManagerService) {

  }

  facebookLogout(){
    this.facebook.logout().then(()=>{
      this.session.userProfile = null;
      this.navCtrl.setRoot(WelcomePage).then(()=>console.log("Send to welcome after logout"));
    })
      .catch(error=>console.log(error));
  }

}
