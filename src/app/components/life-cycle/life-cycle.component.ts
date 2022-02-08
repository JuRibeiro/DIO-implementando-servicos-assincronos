import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy {

    @Input() number = 10;

  constructor() { 
    console.log('chamou o constructor')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('chamou o onChanges')
  }

  ngOnInit(): void {
    console.log('chamou o onInit')
  }

  ngDoCheck(): void {
    console.log('chamou o doCheck')
  }

  ngAfterContentInit(): void {
    console.log('chamou o afterContentinit')
  }

  ngAfterContentChecked(): void {
    console.log('chamou o afterContentChecked')
  }

  ngAfterViewInit(): void {
    console.log('chamou o afterViewInit')
  }

  ngAfterViewChecked(): void {
    console.log('chamou o afterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('chamou o onDestroy')
  }
  

}
