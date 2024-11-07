import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaurdsPageComponent } from './gaurds-page.component';

describe('GaurdsPageComponent', () => {
  let component: GaurdsPageComponent;
  let fixture: ComponentFixture<GaurdsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GaurdsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GaurdsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
