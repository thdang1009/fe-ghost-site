import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './_layouts/admin-layout/admin-layout.component';
import { LoginGuard } from './views/auth-management/auth/login.guard';
import { GuestLayoutComponent } from './_layouts/guest-layout/guest-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./_layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule),
      canActivate: [LoginGuard]
    }]
  },
  {
    path: '',
    component: GuestLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./_layouts/guest-layout/guest-layout.module').then(m => m.GuestLayoutModule),
    }]
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
