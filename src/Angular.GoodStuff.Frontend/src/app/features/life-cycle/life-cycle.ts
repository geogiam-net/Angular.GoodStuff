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
  ngOnInit() {}
  ngOnChanges() {}
  ngDoCheck() {}
  ngAfterContentInit() {}
  ngAfterContentChecked() {}
  ngAfterViewInit() {}
  ngAfterViewChecked() {}
  ngOnDestroy() {}
}
