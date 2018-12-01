import { Injectable } from '@angular/core';
import {UserService} from './user.service';

interface Event {name: string, venue: string, date: number}

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(public storageService: Storage, public userServcice: UserService) { }

  async get(): Promise<Event[]> {
    return await this.storageService.get(this.userServcice.getUser());
  }

  async add(event: Event) {
    const current_events = await this.storageService.get(this.userServcice.getUser());
    console.log(current_events);
    this.storageService.set(this.userServcice.getUser(), current_events.concat([event]));
  }

  async clean() {
    await this.storageService.set(this.userServcice.getUser(), []);
  }
}
