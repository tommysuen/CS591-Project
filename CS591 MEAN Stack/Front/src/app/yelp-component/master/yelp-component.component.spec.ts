import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YelpComponentComponent } from './yelp-component.component';

describe('YelpComponentComponent', () => {
  let component: YelpComponentComponent;
  let fixture: ComponentFixture<YelpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YelpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YelpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
