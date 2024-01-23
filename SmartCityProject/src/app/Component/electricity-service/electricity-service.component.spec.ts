import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityServiceComponent } from './electricity-service.component';

describe('ElectricityServiceComponent', () => {
  let component: ElectricityServiceComponent;
  let fixture: ComponentFixture<ElectricityServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElectricityServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectricityServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
