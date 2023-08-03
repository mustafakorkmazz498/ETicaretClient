import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends BaseComponent implements OnInit {
  constructor(
    spiner: NgxSpinnerService,
    private productService: ProductService,
    private alertify: AlertifyService
  ) {
    super(spiner);
  }

  ngOnInit(): void {}

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerType.SquareJellyBox);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    if(!name.value){
      this.alertify.message("Lütfen ürün adını giriniz.",{
        dismissOthers : true,
        messageType : MessageType.Error,
        position : Position.TopRight
      });
      return;
    }
    if(parseInt(stock.value)<0){
      this.alertify.message("Lütfen stok bilgisini giriniz.",{
        dismissOthers : true,
        messageType : MessageType.Error,
        position : Position.TopRight
      });
    }

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.SquareJellyBox);
      this.alertify.message('Ürün başarıyla eklenmiştir.', {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight,
      });
    }, errorMessage =>{
      this.alertify.message(errorMessage,{
        dismissOthers : true,
        messageType : MessageType.Error,
        position : Position.TopRight
      });
    });
  }
}
