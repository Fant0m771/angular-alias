import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  @Input() interval = 0;
  @Output() finish = new EventEmitter();

  // timeLeft = 0;

  constructor() { }

  ngOnInit() { }

  start(seconds) {
    this.interval = seconds === undefined ? this.interval : seconds;
    // this.timeLeft = this.interval;
    const handle = setInterval(() => {
      this.interval --;
      if (this.interval <= 0) {
        clearInterval(handle);
        this.finish.emit();
      }
    }, 1000);
  }

  restart() {
   console.warn(this.interval);
  }


  createRange(number) {
   var items: number[] = [];
   for (let i = 1; i <= number; i++) {
      items.push(i);
   }
   return items;
  }

}
