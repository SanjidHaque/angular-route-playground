import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSupportChatComponent } from './customer-support-chat.component';

describe('CustomerSupportChatComponent', () => {
  let component: CustomerSupportChatComponent;
  let fixture: ComponentFixture<CustomerSupportChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerSupportChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSupportChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
