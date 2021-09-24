import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInitComponent } from './dialog-init.component';

describe('DialogInitComponent', () => {
  let component: DialogInitComponent;
  let fixture: ComponentFixture<DialogInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
