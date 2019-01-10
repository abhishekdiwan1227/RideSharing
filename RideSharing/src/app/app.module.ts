import { NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicApp, IonicModule } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { RidePage } from '../pages/ride/ride';
import { TabsPage } from '../pages/tabs/tabs';
import { UserService } from '../services/userService';
import { HttpClientWrapper } from '../wrapper/httpClientWrapper';
import { MyApp } from './app.component';

@NgModule({
    declarations: [
        MyApp,
        RidePage,
        ProfilePage,
        LoginPage,
        RegisterPage,
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
        TabsPage
    ],
    providers: [HttpClientWrapper, UserService, Geolocation]
})
export class AppModule { }
