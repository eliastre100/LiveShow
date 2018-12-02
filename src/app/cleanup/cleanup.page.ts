import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-cleanup',
  templateUrl: './cleanup.page.html',
  styleUrls: ['./cleanup.page.scss'],
})
export class CleanupPage implements OnInit {

  constructor(private navCtrl: NavController, private eventsService: EventsService) { }

  async ngOnInit() {
    await this.eventsService.clean();
    this.navCtrl.goBack(false);
  }

}
