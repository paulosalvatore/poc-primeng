import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {
  }

  getEvents(): Promise<any[]> {
    return this.http.get<any>('/assets/data/scheduleevents.json')
      .toPromise()
      .then(res => (res.data as any[]));
  }
}
