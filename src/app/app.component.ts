import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {Facebook} from "@ionic-native/facebook";
import {SessionManagerService} from "../service/session.manager.service";
import {WelcomePage} from "../pages/welcome-page/welcome.page";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any,icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar,
              public fb:Facebook,
              public splashScreen: SplashScreen,
              public session:SessionManagerService) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage,icon:'home' },
      { title: 'Mascotas', component: ListPage,icon:'paw' },
      { title: 'Agenda', component: ListPage,icon:'calendar'},
      { title: 'Suministros', component: ListPage,icon:'basket' },
      { title: 'Configuración', component: ListPage,icon:'cog' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.fb.getLoginStatus().then((data)=>{
        if(data.status==='connected'){
          console.log("Success logged: ",data);
          this.fb.api("/me?fields=id,name,email,first_name,picture.width(500).heigth(500).as(picture_large)",[])
            .then(userProfile=>{
              this.session.userProfile = {
                email: userProfile.email,
                name:`${userProfile.name} ${userProfile.first_name}`,
                image:userProfile['picture_large']['data']['url']
              };
              this.rootPage = HomePage;
            });
        }else{
          this.rootPage = WelcomePage;
        }
        this.splashScreen.hide();
      }).catch(error=>{
        console.error(error);
        this.rootPage = WelcomePage;
        this.splashScreen.hide();
      });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
