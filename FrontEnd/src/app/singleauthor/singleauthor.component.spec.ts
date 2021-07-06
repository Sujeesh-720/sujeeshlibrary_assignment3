import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleauthorComponent } from './singleauthor.component';

describe('SingleauthorComponent', () => {
  let component: SingleauthorComponent;
  let fixture: ComponentFixture<SingleauthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleauthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleauthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
