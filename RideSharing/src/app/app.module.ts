import { NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicApp, IonicModule } from 'ionic-angular';
import { DriverPage } from '../pages/driver/driver';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { RidePage } from '../pages/ride/ride';
import { TabsPage } from '../pages/tabs/tabs';
import { RiderService } from '../services/riderService';
import { UserService } from '../services/userService';
import { GoogleMapsServiceWrapper } from '../wrapper/googleMapsServiceWrapper';
import { HttpClientWrapper } from '../wrapper/httpClientWrapper';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
        RidePage,
        ProfilePage,
        LoginPage,
        RegisterPage,
        DriverPage,
        TabsPage,
    ],
    imports: [
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        RidePage,
        ProfilePage,
        LoginPage,
        RegisterPage,
        DriverPage,
        TabsPage
    ],
    providers: [HttpClientWrapper, UserService, Geolocation, RiderService, GoogleMapsServiceWrapper]
})
export class AppModule { }
