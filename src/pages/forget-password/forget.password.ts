import {Component} from "@angular/core";

@Component({
  selector:'page-forget-password',
  templateUrl:'forget.password.html'
})
export class ForgetPassword{
  public model:any = {username:""};

  resetPassword(){
    //TODO add recover password
  }
}
