import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'onpush-change-detection';
  variable: string;

  constructor(private cdr: ChangeDetectorRef) {
    this.variable = "Programmer";
    this.cdr.detach();
  }

  ngAfterViewInit(): void {

    this.variable = "Cambios de informacion";
    //this.cdr.detectChanges();
    //this.cdr.markForCheck();
    this.cdr.reattach();


  }

}
