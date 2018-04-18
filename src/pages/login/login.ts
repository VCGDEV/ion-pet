
import {Component} from "@angular/core";
import {Facebook} from "@ionic-native/facebook";
import {HomePage} from "../home/home";
import {SessionManagerService} from "../../service/session.manager.service";
import {NavController, ToastController} from "ionic-angular";
import {ForgetPassword} from "../forget-password/forget.password";

@Component({
  selector:'page-login',
  templateUrl:'login.html'
})
export class Login{

  public request:any = {
    username:"",
    password:""
  };

  constructor(public facebook:Facebook,
              public session:SessionManagerService,
              public navCtrl:NavController,
              public toastCtrl:ToastController){

  }

  facebookLogin(){
    this.facebook.login(['public_profile','user_friends','email'])
      .then((res)=>{
        this.facebook.api("/me?fields=id,name,email,first_name,picture.width(500).heigth(500).as(picture_large)",[])
          .then(userProfile=>{
            this.session.userProfile = {
              email: userProfile.email,
              name:`${userProfile.name} ${userProfile.first_name}`,
              image:userProfile['picture_large']['data']['url']
            };
            this.navCtrl.setRoot(HomePage).then(()=>console.log("Go to home"));
          });
      }).catch(e=>this.toastCtrl.create({message:"Error al iniciar sesión con Facebook",position:'top',dismissOnPageChange:true,duration:4000}).present());
  }

  recoverPassword(){
    this.navCtrl.push(ForgetPassword).then(()=>console.log("To recover password"));
  }

  login(){
    this.navCtrl.push(HomePage);
  }
}
