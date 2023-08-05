import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileuploadComponent } from './fileupload.component';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [FileuploadComponent],
  imports: [CommonModule, NgxFileDropModule, MatDialogModule],
  exports: [FileuploadComponent],
})
export class FileuploadModule {}
