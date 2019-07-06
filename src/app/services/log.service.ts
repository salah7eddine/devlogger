import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';


import { Log } from './../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/11/2018 12:54:23') },
      { id: '2', text: 'Added Bootstrap', date: new Date('12/30/2019 11:34:11') },
      { id: '3', text: 'Added logs component', date: new Date('08/01/2018 17:33:23') },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

}
