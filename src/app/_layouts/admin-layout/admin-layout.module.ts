import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutRoutes } from './admin-layout.routing';
// import { CodeEditorModule } from '@ngstack/code-editor';
import { ReuseComponentModule } from '@reuse/reuse.module';
import { DashboardComponent } from '@views/dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout.component';
import { ComponentsModule } from '@app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ReuseComponentModule,
    ComponentsModule
    // CodeEditorModule.forRoot(),
  ],
  declarations: [
    DashboardComponent,
    AdminLayoutComponent
  ],
  providers: [
  ],
  exports: [
    // CodeEditorModule,
  ]
})

export class AdminLayoutModule { }
