import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './features/detail/detail.component';
import { AboutComponent } from './features/about/about.component';
import { AuthComponent } from './features/auth/auth.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'login', component: AuthComponent },

];
