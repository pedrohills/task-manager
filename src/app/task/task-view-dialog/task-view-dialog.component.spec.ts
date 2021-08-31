import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskViewDialogComponent } from './task-view-dialog.component';

describe('TaskViewDialogComponent', () => {
  let component: TaskViewDialogComponent;
  let fixture: ComponentFixture<TaskViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskViewDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
