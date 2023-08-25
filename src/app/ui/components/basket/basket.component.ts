import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { List_Basket_Item } from 'src/app/contracts/basket/list_basket_item';
import { Update_Basket_Item } from 'src/app/contracts/basket/update_basket_item';
import { Create_Order } from 'src/app/contracts/order/create_order';
import {
  BasketItemDeleteState,
  BasketItemRemoveDialogComponent,
} from 'src/app/dialogs/basket-item-remove-dialog/basket-item-remove-dialog.component';
import {
  BasketShoppingCompleteDialogComponent,
  BasketShoppingCompleteState,
} from 'src/app/dialogs/basket-shopping-complete-dialog/basket-shopping-complete-dialog.component';
import { DialogService } from 'src/app/services/common/dialog.service';
import { BasketService } from 'src/app/services/common/models/basket.service';
import { OrderService } from 'src/app/services/common/models/order.service';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from 'src/app/services/ui/custom-toastr.service';

declare var $: any;

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private basketService: BasketService,
    private orderService: OrderService,
    private toastrService: CustomToastrService,
    private router: Router,
    private dialogService: DialogService
  ) {
    super(spinner);
  }

  basketItems: List_Basket_Item[];
  async ngOnInit(): Promise<void> {
    this.showSpinner(SpinnerType.SquareJellyBox);
    this.basketItems = await this.basketService.get();
    this.hideSpinner(SpinnerType.SquareJellyBox);
  }

  async changeQuantity(object: any) {
    this.showSpinner(SpinnerType.SquareJellyBox);
    const basketItemId: string = object.target.attributes['id'].value;
    const quantity: number = object.target.value;
    const basketItem: Update_Basket_Item = new Update_Basket_Item();
    basketItem.basketItemId = basketItemId;
    basketItem.quantity = quantity;
    await this.basketService.updateQuantity(basketItem);
    this.hideSpinner(SpinnerType.SquareJellyBox);
  }
  removeBasketItem(basketItemId: string) {
    $('#basketModal').modal('hide');
    this.dialogService.openDialog({
      componentType: BasketItemRemoveDialogComponent,
      data: BasketItemDeleteState.Yes,
      afterClosed: async () => {
        this.showSpinner(SpinnerType.SquareJellyBox);

        await this.basketService.remove(basketItemId);
        $('.' + basketItemId).fadeOut(500, () =>
          this.hideSpinner(SpinnerType.SquareJellyBox)
        );
        $('#basketModal').modal('show');
      },
    });
  }
  shoppingComplete() {
    $('#basketModal').modal('hide');
    this.dialogService.openDialog({
      componentType: BasketShoppingCompleteDialogComponent,
      data: BasketShoppingCompleteState.Yes,
      afterClosed: async () => {
        this.showSpinner(SpinnerType.SquareJellyBox);
        const order: Create_Order = new Create_Order();
        order.address = 'Didim';
        order.description = 'Deneme açıklama';
        await this.orderService.create(order);
        this.hideSpinner(SpinnerType.SquareJellyBox);
        this.toastrService.message(
          'Sipariş alınmıştır.',
          'Sipariş Oluşturuldu!',
          {
            messageType: ToastrMessageType.Info,
            position: ToastrPosition.TopRight,
          }
        );
        this.router.navigate(['/']);
      },
    });
  }
}
