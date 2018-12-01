import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import {UserService} from './user.service';

describe('EventsService', () => {
    let storageService;
    let userService;

    const event1 = {name: 'event1', venue: 'venue1', date: 12345};
    const event2 = {name: 'event2', venue: 'venue2', date: 12345};
    const event3 = {name: 'event3', venue: 'venue3', date: 12345};

    beforeEach(() => {
        storageService = jasmine.createSpyObj('Storage', ['set', 'get']);
        userService = jasmine.createSpyObj('UserService', ['getUser', 'login']);
        userService.getUser.and.returnValue('0');
        storageService.get.and.returnValue([]);
        TestBed.configureTestingModule({
            providers: [{provide: UserService, useValue: userService}, {provide: Storage, useValue: storageService}],
        });
    });

    it('should be created', () => {
        const service: EventsService = TestBed.get(EventsService);
        expect(service).toBeTruthy();
    });

    describe('create', () => {
        it('should store the new event', async () => {
            const service: EventsService = TestBed.get(EventsService);
            await service.add(event1);
            expect(storageService.set).toHaveBeenCalledWith('0', [event1]);
        });

        it('should add the event to the previous ones', async () => {
            const service: EventsService = TestBed.get(EventsService);
            storageService.get.and.callFake((id) => {
                if (id === '0') {
                    return [event1];
                } else {
                    return [];
                }
            });
            await service.add(event2);
            expect(storageService.set).toHaveBeenCalledWith('0', [event1, event2]);
        });
    });

    describe('get', () => {
        let service: EventsService;

        beforeEach(() => {
            storageService.get.and.callFake((id) => {
                if (id === '1') {
                    return Promise.resolve([event1, event2]);
                } else {
                    return Promise.resolve([event3]);
                }
            });
            service = TestBed.get(EventsService);
        });

        it('should return the events associated to the current user', async () => {
            userService.getUser.and.returnValue('1');
            expect(await service.get()).toContain(event1, event2);
        });

        it('shouldn\'t return the events from other users', async () => {
            userService.getUser.and.returnValue('1');
            expect(await service.get()).not.toContain(event3);
        });
    });

    describe('clean', () => {
        let service: EventsService;

        beforeEach(() => {
            storageService.get.and.callFake((id) => {
                if (id === '1') {
                    return Promise.resolve([event1, event2]);
                } else {
                    return Promise.resolve([event3]);
                }
            });
            userService.getUser.and.returnValue('azerty');
            service = TestBed.get(EventsService);
        });

        it('cleans the current user\'s data', async () => {
            service.clean();
            expect(storageService.set).toHaveBeenCalledWith('azerty', []);
        });
    });
});
