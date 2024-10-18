import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GuestLayoutRoutes } from './guest-layout.routing';
import { ReuseComponentModule } from '@reuse/reuse.module';
import { SharedModule } from '@shares/shared-module.module';
// import { ComponentsModule } from '@components/components.module';
import { HomeComponent } from '@views/home/home.component';
import { GuestLayoutComponent } from './guest-layout.component';
import { ComponentsModule } from '@app/components/components.module';
import { AuthManagementModule } from '@app/views/auth-management/auth-management.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(GuestLayoutRoutes),
    ReuseComponentModule,
    ComponentsModule,
    AuthManagementModule
  ],
  declarations: [
    HomeComponent,
    GuestLayoutComponent
  ]
})

export class GuestLayoutModule { }
