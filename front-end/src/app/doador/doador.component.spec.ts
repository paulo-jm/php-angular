import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoadorComponent } from './doador.component';

describe('DoadorComponent', () => {
  let component: DoadorComponent;
  let fixture: ComponentFixture<DoadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
