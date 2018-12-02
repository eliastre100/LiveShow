import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.page.html',
  styleUrls: ['./new-event.page.scss'],
})
export class NewEventPage implements OnInit {

  public event = {name: '', venue: '', date: 0};

  constructor(private eventService: EventsService, private navCtrl: NavController) { }

  ngOnInit() {
  }

  add() {
    if (this.event.name === '' || this.event.venue === '' || this.event.date === 0) { return; }
    this.eventService.add({
        name: this.event.name,
        venue: this.event.venue,
        date: new Date(this.event.date).getTime()
    }).then(() => {
      this.navCtrl.navigateBack('/tabs/(events:events)');
    });
  }

}
