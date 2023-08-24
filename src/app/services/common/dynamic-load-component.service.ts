import {
  ComponentFactoryResolver,
  Injectable,
  ViewContainerRef,
} from '@angular/core';
import { BaseComponent } from 'src/app/base/base.component';

@Injectable({
  providedIn: 'root',
})
export class DynamicLoadComponentService {

  //ViewContainerRef: Dinamik olarak yüklenecek componenti içerisinde barındıran conteinerdır.
  //ComponentFactory: Componentlerin instancelarını oluşturmak için kullanılan nesnedir.
  //ComponentFactoryResovler: Belirli bir component için ComponentFactory'i resolve eden sınıftır.


  constructor() {}

  async loadComponent(
    component: ComponentType,
    viewContainerRef: ViewContainerRef
  ) {
    let _component: any = null;
    switch (component) {
      case ComponentType.BasketComponent:
        _component = (await import(
          '../../ui/components/basket/basket.component'
        )).BasketComponent;
        break;
    }
    viewContainerRef.clear();
    return viewContainerRef.createComponent(_component);
  }
}

export enum ComponentType {
  BasketComponent,
}
