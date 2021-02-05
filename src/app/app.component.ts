import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

import { EventService } from './event.service';

import { CalendarOptions } from '@fullcalendar/angular';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  options: CalendarOptions = {
    initialView: 'listWeek',
    initialDate: '2021-02-07',
    slotDuration: '02:00:00',
    themeSystem: 'bootstrap',
    locale: ptBrLocale,
  };

  constructor(
    private primengConfig: PrimeNGConfig,
    private eventService: EventService,
  ) {
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this.eventService.getEvents().then(events => {
      this.options.events = events;
    });
  }
}
