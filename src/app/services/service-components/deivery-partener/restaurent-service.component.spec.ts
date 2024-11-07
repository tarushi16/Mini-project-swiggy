import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentServiceComponent } from './restaurent-service.component';

describe('RestaurentServiceComponent', () => {
  let component: RestaurentServiceComponent;
  let fixture: ComponentFixture<RestaurentServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestaurentServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurentServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
