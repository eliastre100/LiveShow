import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import {HomePageModule} from '../home/home.module';
import {ContactPageModule} from '../contact/contact.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HomePageModule,
        ContactPageModule
    ],
    declarations: [TabsPage]
})
export class TabsPageModule {}
