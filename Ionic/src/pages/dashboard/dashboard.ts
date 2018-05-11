import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient} from '@angular/common/http';
import { UsersProvider } from '/home/ashutosh/Angular_Project/IonicApp/MyApp2/src/providers/users/users'
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private Users:UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  profileclick()
  {
    this.navCtrl.push(ProfilePage);
  }

  logoutclick()
  {
    localStorage.removeItem('userinfo');
        this.navCtrl.push(HomePage);
  }

}
