import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { UsersProvider } from '/home/ashutosh/Angular_Project/IonicApp/MyApp2/src/providers/users/users'
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { DashboardPage } from '/home/ashutosh/Angular_Project/IonicApp/MyApp2/src/pages/dashboard/dashboard';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  Username: String;
  Password: String;
  Response:String;

  constructor(public navCtrl: NavController, public navParams: NavParams,private Users:UsersProvider) {
  }

  onloginclick() {
    
    let user = {
      username: this.Username,
      password: this.Password

    }
   
  this.Users.login(user).subscribe(res => {
    console.log(res);
    this.Response=res.success;
    if(res.success)
    {
      this.Users.localstorage(JSON.stringify(res.msg));


      this.navCtrl.push(DashboardPage);
    }
    
  });
  
  }

  


}
