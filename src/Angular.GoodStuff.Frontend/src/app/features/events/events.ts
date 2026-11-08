import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-events',
  styleUrl: './events.css',
  templateUrl: './events.html',
})
export class EventsFeature {
  onBtClick(event: MouseEvent) {
    console.log('button clicked:', event.target);
    // event.stopPropagation();
  }
}
