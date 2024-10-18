import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from '../blog-management/post/post-detail/post-detail.component';
import { HomeComponent } from '../home/home.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NotLoginGuard } from './auth/not-login.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'blogs/:ref',
    title: 'Ghost\'s Posts',
    component: PostDetailComponent,
  },
  {
    path: 'home',
    title: 'Ghost\'s Blogs',
    component: HomeComponent
  },
  {
    path: 'reset-password',
    title: 'Reset password',
    component: ResetPasswordComponent, canActivate: [NotLoginGuard]
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent, canActivate: [NotLoginGuard]
  },
  {
    path: 'logout',
    title: 'Logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    title: 'Register',
    component: RegisterComponent, canActivate: [NotLoginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthManagementRoutingModule { }
