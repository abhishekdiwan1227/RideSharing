import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { UserService } from '../../services/userService';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
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

    constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, public toastCtrl: ToastController) {
        this.loginParams = new Login;
    }

    login() {
        this.userService.authenticateUser(this.loginParams).subscribe(res => {
            this.userService.currentUser = res.json().name;
            if (!res.json()) {
                this.toastCtrl.create({
                    message: "Invalid Username/Password",
                    duration: 3000,
                    position: 'top'
                }).present();
            }
            else {
                this.toastCtrl.create({
                    message: `Logged in as ${this.loginParams.Username}`,
                    duration: 3000,
                    position: 'top'
                }).present();
                this.navCtrl.push(TabsPage);
            }
        });
    }

    register() {
        this.navCtrl.push(RegisterPage)
    }

}
