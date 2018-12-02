import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.page.html',
    styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

    constructor(private router: Router, private userService: UserService) { }

    ngOnInit() {
      setTimeout(() => {
          this.userService.login('-1'); // The default state for the userService is with user named -1
          this.router.navigate(['/login']);
      }, 500); // We need to wait for the view to be initialized and no lifecycle allow that
    }
}
