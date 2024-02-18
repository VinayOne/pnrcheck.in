import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrinfoComponent } from './pnrinfo.component';

describe('PnrinfoComponent', () => {
  let component: PnrinfoComponent;
  let fixture: ComponentFixture<PnrinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PnrinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PnrinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
