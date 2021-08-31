import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from 'src/app/shared/models/Task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-form-dialog',
  templateUrl: './task-form-dialog.component.html',
  styleUrls: ['./task-form-dialog.component.scss']
})
export class TaskFormDialogComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private taskService: TaskService, public dialogRef: MatDialogRef<TaskFormDialogComponent>) {
    this.formGroup = this.formBuilder.group({
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const task: Task = {
      id: ++this.taskService.lastID,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      finished: false,
      created: new Date()
    }

    this.taskService.create(task).subscribe(task => {
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
