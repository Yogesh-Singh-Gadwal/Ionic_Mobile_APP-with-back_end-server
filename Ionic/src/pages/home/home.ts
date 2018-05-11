import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  pchanger(str)
  { 
    if(str=='login'){
    this.navCtrl.push(LoginPage)
    }
    if(str=='signup')
    {this.navCtrl.push(SignupPage)}

    if(str=='profile')
    {this.navCtrl.push(ProfilePage)}
    
  

  }
}
