import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTaskData, Task } from 'src/app/shared/models/Task';
import { TaskService } from 'src/app/shared/services/task.service';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.scss']
})
export class TaskDeleteDialogComponent implements OnInit {

  task: Task;

  constructor(private taskService: TaskService, public dialogRef: MatDialogRef<TaskDeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogTaskData) { }

  ngOnInit(): void {
    this.task = this.data.task;
  }

  deleteTask() {
    this.taskService.delete(this.task).subscribe(task => {
      this.dialogRef.close(this.task);
    })
  }
}
