import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Common Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Ripple
import { RippleModule } from 'primeng/ripple';

// FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import listPlugin from '@fullcalendar/list';

// Components
import { AppComponent } from './app.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  bootstrapPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    RippleModule,
    FullCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
