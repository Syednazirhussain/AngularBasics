import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from './../component/Task';
import { TASKS } from './../component/mock-task';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  getTask (): Observable<Task[]> {
    
    return this.http.get<Task[]>(this.apiUrl)
    /*
    const tasks = of(TASKS)
    return tasks
    */
  }

  deleteTask (task: Task): Observable<Task> {
    
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url)
  }

  updateTaskReminder (task: Task): Observable<Task> {

    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url, task, HttpOptions)
  }

  addTask (task: Task) : Observable<Task> {

    return this.http.post<Task>(this.apiUrl, task, HttpOptions);
  }



}
