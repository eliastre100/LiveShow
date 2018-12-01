import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsPage} from './tabs/tabs.page';
import {HomePage} from './home/home.page';
import {ContactPage} from './contact/contact.page';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: HomePage
            },
            {
                path: 'contact',
                outlet: 'contact',
                component: ContactPage
            }]
    },
    { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
