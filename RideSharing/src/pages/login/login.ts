import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { Login } from './login.models';
import { UserService } from '../../services/userService';

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
        this.loginParams = new Login;
    }

    login() {
        this.userService.authenticateUser(this.loginParams);
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
