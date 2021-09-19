import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Task } from '../Task';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;

  showAddTask: boolean = false;
  subcription: Subscription;

  constructor(private uiService: UiService) {

    this.subcription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })

   }

  ngOnInit(): void {
  }

  onSubmit () {
    if (!this.text) {
      alert('Please add a task!')
      return
    }

    const newTask: Task = {
      "text": this.text,
      "day": this.day,
      "reminder": this.reminder
    }

    this.onAddTask.emit(newTask)

    this.text = ""
    this.day = ""
    this.reminder = false

  }

}