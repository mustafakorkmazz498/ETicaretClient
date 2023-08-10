import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { FileUploadDialogComponent } from 'src/app/dialogs/file-upload-dialog/file-upload-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'src/app/dialogs/dialog.module';

@NgModule({
  declarations: [
    FileuploadComponent,
    FileUploadDialogComponent
  ],
  imports: [
    CommonModule,
    NgxFileDropModule,
    MatDialogModule, MatButtonModule
  ],
  exports: [
    FileuploadComponent
  ]
})
export class FileUploadModule { }