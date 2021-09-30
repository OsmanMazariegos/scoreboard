import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddClubComponent } from './dialog-add-club.component';

describe('DialogAddClubComponent', () => {
  let component: DialogAddClubComponent;
  let fixture: ComponentFixture<DialogAddClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
