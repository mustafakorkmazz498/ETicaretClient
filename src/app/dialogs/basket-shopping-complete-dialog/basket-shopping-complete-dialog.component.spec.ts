import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketShoppingCompleteDialogComponent } from './basket-shopping-complete-dialog.component';

describe('BasketShoppingCompleteDialogComponent', () => {
  let component: BasketShoppingCompleteDialogComponent;
  let fixture: ComponentFixture<BasketShoppingCompleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasketShoppingCompleteDialogComponent]
    });
    fixture = TestBed.createComponent(BasketShoppingCompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
