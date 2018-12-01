import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  public events = [];

  constructor(private eventsService: EventsService, public router: Router) { }

  async ngOnInit() {
    this.events = await this.eventsService.get();
  }
}
