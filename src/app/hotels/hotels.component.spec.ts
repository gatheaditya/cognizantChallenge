
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsComponent } from './hotels.component';

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
