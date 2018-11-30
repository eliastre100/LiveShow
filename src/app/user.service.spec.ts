import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: UserService = TestBed.get(UserService);
        expect(service).toBeTruthy();
    });

    describe('getUser', () => {
        let service: UserService;

        beforeEach(() => { service = TestBed.get(UserService); });

        it('should not be logged by default', () => {
            expect(service.getUser()).toBe('-1');
        });

        it('should return current logged user id', () => {
            service.login('1234');
            expect(service.getUser()).not.toBe('-1');
        });
    });

    describe('login', () => {
        let service: UserService;

        beforeEach(() => { service = TestBed.get(UserService); });

        it('should save the id passed', () => {
          service.login('123456');
          expect(service.getUser()).toBe('123456');
        });
    });
});
