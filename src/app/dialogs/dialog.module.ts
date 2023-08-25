import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SelectProductImageDialogComponent } from './select-product-image-dialog/select-product-image-dialog.component';
import { FileUploadModule } from '../services/common/fileupload/fileupload.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { BasketItemRemoveDialogComponent } from './basket-item-remove-dialog/basket-item-remove-dialog.component';
import { BasketShoppingCompleteDialogComponent } from './basket-shopping-complete-dialog/basket-shopping-complete-dialog.component';

@NgModule({
  declarations: [DeleteDialogComponent, SelectProductImageDialogComponent, BasketItemRemoveDialogComponent, BasketShoppingCompleteDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    FileUploadModule,
    FormsModule
  ],
})
export class DialogModule {}
