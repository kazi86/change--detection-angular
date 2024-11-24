import { ChangeDetectionStrategy, Component, inject, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-message',
  standalone: true,
  imports: [],
  templateUrl: './info-message.component.html',
  styleUrl: './info-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoMessageComponent implements OnInit {

  public zoneSvc = inject(NgZone);

  public get debugOutput() {
    console.log('[InfoMessages] "debugOutput" binding re-evaluated.');
    return 'InfoMessage Component Debug Output';
  }

  public ngOnInit(): void {
     
    //running outside the ngZone hence no change detection runs
    this.zoneSvc.runOutsideAngular(()=>{

      setTimeout(()=>{

        console.log("Timer Has Expired!")
  
      },2000);
  
    });
  
  }

  public onLog() {
    console.log('Clicked!');
  }
}
