import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Login } from './login.models';

/*
  Generated class for the login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    loginParams: Login;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.loginParams = new Login;
    }

    login() {
        console.log(this.loginParams.Username + " " + this.loginParams.Password)
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
