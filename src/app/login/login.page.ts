import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor(public fb: Facebook, public userService: UserService, public router: Router) { }

    ngOnInit() {
    }

    facebookLogin() {
        this.fb.login(['public_profile'])
            .then((res: FacebookLoginResponse) => {
                // The connection was successful
                if (res.status === 'connected') {
                    // Get user ID and Token
                    const fb_id = res.authResponse.userID;
                    this.login(fb_id);
                } else {
                    console.log('An error occurred...');
                }
            })
            .catch((e) => {
                console.log('Error logging into Facebook', e);
            });
    }

    guestLogin() {
        this.login('0');
    }

    login(id: string) {
        this.userService.login(id);
        this.router.navigate(['/home']);
    }
}
