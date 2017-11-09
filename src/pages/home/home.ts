import {Component, Inject} from '@angular/core';
import { NavController } from 'ionic-angular';
import {EnvironmentVariables} from "../../environment/environment.token";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              @Inject(EnvironmentVariables)public environment) {
    console.debug(JSON.stringify(this.environment));
  }

}
