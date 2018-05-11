import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient} from '@angular/common/http';
import { UsersProvider } from '/home/ashutosh/Angular_Project/IonicApp/MyApp2/src/providers/users/users'
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  Username: String;
  Password: String;
  Name: String;
  RePassword:String;
  msg:String;
  msg1:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private Users:UsersProvider) {
  }
  

  checkpass()
  {
    if(this.Password!=this.RePassword)
    {
      this.msg="password not matching"

    }
    if(this.Password==this.RePassword)
    {
      this.msg="password  matched"

    }




  }




  onsignupclick() {
    
    let user = {
      name:this.Name,
      username: this.Username,
      password: this.Password

    }
   
  this.Users.signup(user).subscribe(res => {
    console.log(res);
    this.msg1=res.msg;
    if(res.success==true)
    {
      this.navCtrl.push(LoginPage)


    }
    
  });
  
  }
}
