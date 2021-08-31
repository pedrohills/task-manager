import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogTaskData, Task } from 'src/app/shared/models/Task';


@Component({
  selector: 'app-task-view-dialog',
  templateUrl: './task-view-dialog.component.html',
  styleUrls: ['./task-view-dialog.component.scss']
})
export class TaskViewDialogComponent implements OnInit {

  task: Task;

  constructor(public dialogRef: MatDialogRef<TaskViewDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogTaskData) { }

  ngOnInit(): void {
    this.task = this.data.task;
  }

}
