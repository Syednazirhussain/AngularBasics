import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { UiService } from 'src/app/service/ui.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker'

  showAddTask: boolean = true;
  subcription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subcription = this.uiService.onToggle().subscribe(value => {
      this.showAddTask = value
    })
   }

  ngOnInit(): void {
  }

  toggleAddTask () {

    this.uiService.toggleAddTask()
    // console.log('Toggle')
  }

  hasOnly (route: string) {
    return this.router.url === route
  }

}
