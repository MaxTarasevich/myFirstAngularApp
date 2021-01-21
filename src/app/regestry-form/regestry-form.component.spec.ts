import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegestryFormComponent } from './regestry-form.component';

describe('RegestryFormComponent', () => {
  let component: RegestryFormComponent;
  let fixture: ComponentFixture<RegestryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegestryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegestryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
