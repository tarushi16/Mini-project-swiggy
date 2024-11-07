import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntDisplayComponent } from './restraunt-display.component';

describe('RestrauntDisplayComponent', () => {
  let component: RestrauntDisplayComponent;
  let fixture: ComponentFixture<RestrauntDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrauntDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestrauntDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
