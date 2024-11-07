import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeiveryPartenerComponent } from './deivery-partener.component';

describe('DeiveryPartenerComponent', () => {
  let component: DeiveryPartenerComponent;
  let fixture: ComponentFixture<DeiveryPartenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeiveryPartenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeiveryPartenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
