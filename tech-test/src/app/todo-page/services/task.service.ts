import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Task} from "../models/task.model";

@Injectable()
export class TaskService {

  constructor(private httpService: HttpClient) {}

  getTasks(): Observable<unknown> {
    return this.httpService.get('http://localhost:3000/tasks');
  }

  getTaskDetails(id: number): Observable<unknown> {
    return this.httpService.get(`http://localhost:3000/tasks/${id}`);
  }

  createTask(task: Task): Observable<unknown> {
    return this.httpService.post('http://localhost:3000/tasks', task);
  }

  deleteTask(id: number): Observable<unknown> {
    return this.httpService.delete(`http://localhost:3000/tasks/${id}`);
  }

  updateTask(task: Task): Observable<unknown> {
    return this.httpService.patch(`http://localhost:3000/tasks/${task.id}`, task);
  }
}
