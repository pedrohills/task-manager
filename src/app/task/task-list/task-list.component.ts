import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { Task } from 'src/app/shared/models/Task';
import { TaskService } from 'src/app/shared/services/task.service';
import { TaskDeleteDialogComponent } from '../task-delete-dialog/task-delete-dialog.component';
import { TaskFormDialogComponent } from '../task-form-dialog/task-form-dialog.component';
import { TaskViewDialogComponent } from '../task-view-dialog/task-view-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  displayedColumns = ["id", "title", "finished", "created", "actions"];
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(private dialog: MatDialog, private snackbar: MatSnackBar, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.retrieve().subscribe(tasks => {
      this.tasks = tasks;

      if(this.table) {
        this.table.renderRows();
      }
    });
  }

  openTaskFormDialog() {
    let dialogRef = this.dialog.open(TaskFormDialogComponent, {
      width: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackbar.open('Tarefa cadastrada com sucesso!', 'OK!');
        this.ngOnInit();
      }
    });
  }

  openTaskViewDialog(task: Task) {
    this.dialog.open(TaskViewDialogComponent, {
      width: '700px',
      data: { task }
    });
  }

  openTaskDeleteDialog(task: Task) {
    let dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      data: { task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.snackbar.open('Tarefa removida com sucesso!', 'OK!');
        this.ngOnInit();
      }
    });
  }
}
