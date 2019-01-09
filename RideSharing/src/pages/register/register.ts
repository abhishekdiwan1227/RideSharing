import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { UserService } from '../../services/userService';
import { LoginPage } from '../login/login';
import { Register } from './register.models';

/*
  Generated class for the register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
    providers: [UserService] 
})
export class RegisterPage {

    registerParams: Register;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public userService: UserService) {
        this.registerParams = new Register();
    }

    registerUser() {
        this.userService.registerUser(this.registerParams).subscribe(res => {
            if (res.status == 200) {
                this.toastCtrl.create({
                    message: "User Created",
                    duration: 3000,
                    position: 'top'
                }).present();
                this.navCtrl.push(LoginPage);
            }
            else {
                this.toastCtrl.create({
                    message: "Failed to Register New User",
                    duration: 3000,
                    position: 'top'
                }).present();
            }
        });
    }

}
