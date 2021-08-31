import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './task/task-list/task-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskFormDialogComponent } from './task/task-form-dialog/task-form-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TaskService } from './shared/services/task.service';
import { MatMenuModule } from '@angular/material/menu';
import { TaskViewDialogComponent } from './task/task-view-dialog/task-view-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { TaskDeleteDialogComponent } from './task/task-delete-dialog/task-delete-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskFormDialogComponent,
    TaskViewDialogComponent,
    TaskDeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatInputModule,
    MatChipsModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatTooltipModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [TaskService],
  entryComponents: [TaskFormDialogComponent, TaskViewDialogComponent, TaskDeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
