import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { UsersProvider } from '/home/ashutosh/Angular_Project/IonicApp/MyApp2/src/providers/users/users'
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  abcd:any;
  name:String;
  username:String;
  id:String;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private Users:UsersProvider) {

   this.abcd=JSON.parse(localStorage.getItem('userinfo'));


   this.name=this.abcd.name;
   this.username=this.abcd.username;
   this.id=this.abcd.id;



  }


  




}
