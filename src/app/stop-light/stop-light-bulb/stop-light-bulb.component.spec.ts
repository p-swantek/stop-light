import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopLightBulbComponent } from './stop-light-bulb.component';

describe('StopLightBulbComponent', () => {
  let component: StopLightBulbComponent;
  let fixture: ComponentFixture<StopLightBulbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopLightBulbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StopLightBulbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
