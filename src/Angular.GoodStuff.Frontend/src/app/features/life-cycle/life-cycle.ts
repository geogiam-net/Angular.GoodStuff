import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  afterNextRender,
  afterEveryRender,
} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-life-cycle',
  styleUrl: './life-cycle.css',
  templateUrl: './life-cycle.html',
})

// https://angular.dev/guide/components/lifecycle
export class LifeCycleFeature
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    // https://angular.dev/api/core/afterNextRender
    afterNextRender({
      write: () => {
        //this.chart = new MyChart(this.chartRef().nativeElement);
      },
    });

    // https://angular.dev/api/core/afterEveryRender
    afterEveryRender({
      read: () => {
        //console.log('content height: ' + this.contentRef().nativeElement.scrollHeight);
      },
    });
  }

  ngOnInit() {}
  ngOnChanges() {}
  ngDoCheck() {}
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnDestroy() {}
}
