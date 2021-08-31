export interface Task {
    id: number;
    title: string;
    description: string;
    finished: boolean;
    created: Date;
}

export interface DialogTaskData {
    task: Task;
  }