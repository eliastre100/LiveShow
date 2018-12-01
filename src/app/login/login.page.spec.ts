import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPage } from './login.page';
import { Facebook } from '@ionic-native/facebook/ngx';
import {UserService} from '../user.service';
import { routes } from '../app-routing.module';
import {Router} from '@angular/router';

describe('LoginPage', () => {
    let component: LoginPage;
    let fixture: ComponentFixture<LoginPage>;
    let userProvider: UserService;
    let routerProvider;

    beforeEach(async(() => {
        userProvider = new UserService();
        routerProvider = jasmine.createSpyObj('Router', ['navigate']);
        TestBed.configureTestingModule({
            declarations: [ LoginPage ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            providers: [
                {provide: Facebook, useValue: {} },
                {provide: UserService, useValue: userProvider},
                {provide: Router, useValue: routerProvider}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('login', () => {
        it('should store the current user', () => {
            component.login('test');
            expect(userProvider.getUser()).toBe('test');
        });

        it ('should redirect to the home page', () => {
            component.login('test');
            expect(routerProvider.navigate).toHaveBeenCalledWith(['/tabs']);
        });
    });
});
