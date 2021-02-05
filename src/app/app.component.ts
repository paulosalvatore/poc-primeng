import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

import { EventService } from './event.service';

import { CalendarOptions } from '@fullcalendar/angular';

import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  options: CalendarOptions = {
    initialView: 'listWeek',
  };

  constructor(
    private primengConfig: PrimeNGConfig,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.eventService.getEvents().then(events => {
      this.options = {
        themeSystem: 'bootstrap',
        initialDate: '2021-02-01',
        plugins: [dayGridPlugin],
        events
      };
    });
  }
}
