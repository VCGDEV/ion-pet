import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EnviromentVariablesModule} from "../environment/environment.module";
import {Facebook} from "@ionic-native/facebook";
import {WelcomePage} from "../pages/welcome-page/welcome.page";
import {SessionManagerService} from "../service/session.manager.service";
import {Login} from "../pages/login/login";
import {ForgetPassword} from "../pages/forget-password/forget.password";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    Login,
    ForgetPassword
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    EnviromentVariablesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    Login,
    ForgetPassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    SessionManagerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
