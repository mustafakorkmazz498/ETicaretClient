import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox);
    this.httpClientService
      .get({
        controller: 'products',
      })
      .subscribe((data) => console.log(data));

    // this.httpClientService
    //   .post(
    //     {
    //       controller: 'products',
    //     },
    //     {
    //       name: 'Kalem',
    //       stock: 100,
    //       price: 15,
    //     }
    //   )
    //   .subscribe();

    this.httpClientService
      .put(
        {
          controller: 'products',
        },
        {
          id: 'e8e082b4-c699-4cb2-a1d5-52da64c9adaa',
          name: 'Renkli Kalem',
          stock: 1500,
          price: 100,
        }
      )
      .subscribe();

    this.httpClientService
      .delete(
        {
          controller: 'products'
        },
        'd729b938-8755-41b0-8149-0c7132334be9'
      )
      .subscribe();
  }
}
