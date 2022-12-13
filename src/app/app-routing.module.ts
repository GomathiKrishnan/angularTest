import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeGuard } from './Guard/home.guard';
import { LoginGuard } from './Guard/login.guard';

const routes: Routes = [
  {
    path: 'booking',
    canActivate: [HomeGuard],
    children: [
      {
        path: '',
        loadChildren: () =>  import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'summary',
        loadChildren: () => import('./booking-summary/booking-summary.module').then( (m) => m.BookingSummaryModule),
      },
    ]
  },
  {
    path:'session',
    children:[
      {
        path: '',
        canActivate: [LoginGuard],
        loadChildren: () => import('./login/login.module').then((m) => m.LoginModule),
      }
    ]
  },
  {
    path: '',
    redirectTo: 'booking',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
