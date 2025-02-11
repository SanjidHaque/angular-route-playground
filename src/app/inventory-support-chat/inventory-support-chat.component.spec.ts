import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySupportChatComponent } from './inventory-support-chat.component';

describe('InventorySupportChatComponent', () => {
  let component: InventorySupportChatComponent;
  let fixture: ComponentFixture<InventorySupportChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InventorySupportChatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventorySupportChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
