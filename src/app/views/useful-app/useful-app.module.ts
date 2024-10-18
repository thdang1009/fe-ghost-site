import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsefulAppRoutingModule } from './useful-app-routing.module';
import { JsonBeautifierComponent } from './json-beautifier/json-beautifier.component';
import { SharedModule } from '@shares/shared-module.module';
import { JsonExcelComponent } from './json-excel/json-excel.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { TextDiffComponent } from './text-diff/text-diff.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';


@NgModule({
  declarations: [
    JsonBeautifierComponent,
    JsonExcelComponent,
    TextDiffComponent,
  ],
  imports: [
    UsefulAppRoutingModule,
    SharedModule,
    NgxFileDropModule,
    NgJsonEditorModule,
  ]
})
export class UsefulAppModule { }
