import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  imports:[AsyncPipe],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class MessagesListComponent {

  public messages = this.messageSvc.allMessages();

  // public messages$ = this.messageSvc.messages$; //emits the behaviour subject

  constructor(private messageSvc: MessagesService,
    private cd: ChangeDetectorRef,
    private destroyRef: DestroyRef
  ){}

  // public ngOnInit(): void {
    
  //   const subscription = this.messageSvc.messages$.subscribe(data=>{
  //     this.messages  = data;
  //     this.cd.markForCheck();
  //   });


  //   //so that susbscription doesnot run when the ocmponent is hidden
  //   this.destroyRef.onDestroy(()=>{

  //     subscription.unsubscribe();

  //   });

  // }

  public get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
