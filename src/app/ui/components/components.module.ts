import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';
import { BasketModule } from './basket/basket.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    HomeModule,
    BasketModule,
    RegisterModule,
  ],
})
export class ComponentsModule {}
