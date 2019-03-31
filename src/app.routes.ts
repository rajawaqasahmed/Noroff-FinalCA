import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { CardSpecificComponent } from './pages/card-specific/card-specific.component';

const routes: Routes =  [
    {path: '', component: LoginPageComponent},
    {path: 'dashboard', component: DashboardPageComponent},
    //{path: 'card-specific', component: CardSpecificComponent},
    {path: 'card-specific/:id', component: CardSpecificComponent},
];

export const routing = RouterModule.forRoot(routes);
