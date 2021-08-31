import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTaskData, Task } from 'src/app/shared/models/Task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-edit-form-dialog',
  templateUrl: './task-edit-form-dialog.component.html',
  styleUrls: ['./task-edit-form-dialog.component.scss']
})
export class TaskEditFormDialogComponent implements OnInit {
  task: Task;
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    @Inject(MAT_DIALOG_DATA) public data: DialogTaskData,
    public dialogRef: MatDialogRef<TaskEditFormDialogComponent>,
  ) { }

  ngOnInit(): void {
    this.task = this.data.task;

    this.formGroup = this.formBuilder.group({
      id: new FormControl(this.task.id, [Validators.required]),
      title: new FormControl(this.task.title, [Validators.required]),
      description: new FormControl(this.task.description, [Validators.required]),
      finished: new FormControl(this.task.finished, [])
    });
  }

  onSubmit() {
    const task: Task = {
      id: this.task.id,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      finished: this.formGroup.value.finished,
      created: this.task.created
    }

    this.taskService.update(task).subscribe(task => {
      this.dialogRef.close(task);
    });
  }

  get title(): FormControl {
    return this.formGroup.get('title') as FormControl;
  }

  get description(): FormControl {
    return this.formGroup.get('description') as FormControl;
  }
}
