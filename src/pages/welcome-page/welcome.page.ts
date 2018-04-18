
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Login} from "../login/login";

@Component({
  selector:'page-welcome',
  templateUrl:'welcome.page.html'
})
export class WelcomePage{

  constructor(public navCtrl:NavController){

  }



  goToLogin(){
    this.navCtrl.push(Login);
  }

}
