
import {Component} from "@angular/core";
import {Facebook, FacebookLoginResponse} from "@ionic-native/facebook";
import {SesionManagerService} from "../../service/sesion.manager.service";
import {NavController} from "ionic-angular";
import {HomePage} from "../home/home";

@Component({
  selector:'page-welcome',
  templateUrl:'welcome.page.html'
})
export class WelcomePage{

  constructor(public facebook:Facebook,
              public sesion:SesionManagerService,
              public navCtrl:NavController){

  }

  facebookLogin(){
    this.facebook.login(['public_profile','user_friends','email'])
      .then((res:FacebookLoginResponse)=>{
        console.log("Logged into facebook",res);
        this.facebook.api("/me?fields=id,name,email,first_name,picture.width(500).heigth(500).as(picture_large)",[])
          .then(userProfile=>{
            this.sesion.userProfile = {
              email: userProfile.email,
              name:`${userProfile.name} ${userProfile.first_name}`,
              image:userProfile['picture_large']['data']['url']
            };
            this.navCtrl.setRoot(HomePage);
          });
      }).catch(e=>console.error("Facebook login error"));
  }

}
