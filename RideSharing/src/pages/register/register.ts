import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Register } from './register.models';
import { RegistrationService } from '../../services/registrationService';

/*
  Generated class for the register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
    providers: [RegistrationService]
})
export class RegisterPage {

    registerParams: Register;

    constructor(public navCtrl: NavController, public navParams: NavParams, public registrationService: RegistrationService) {
        this.registerParams = new Register();
    }

    registerUser() {
        this.registrationService.registerUser();
    }

}
