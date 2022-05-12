import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { MessageService } from '../message.service';

// interface messages {messages: any[], pageToken:string};/
@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {
  messages: any[] = [];
  nextPageToken = '';
  baseUrl = 'http://message-list.appspot.com/';
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages(nextPageToken?: any) {
    let token = '';
    if(nextPageToken) token = nextPageToken;
    this.messageService
      .getMessages(token)
      .pipe(take(1))
      .subscribe((data: any) => {
        // console.log(data);
        this.messages.push(...data['messages']);
        this.nextPageToken = data.pageToken;
      });
  }

  getNewMessages() {
    // console.log('Scrolled');
    this.getMessages(this.nextPageToken);
  }

  drop(event: CdkDragDrop<any, any>): any {
    this.messages.splice(event.currentIndex, 1);
  }


  dragEnd(e: any, id:any){
    // console.log(e);
    if(e.distance.x>100){
      let currentIndex = this.messages.findIndex(message => message.id == id);
      this.messages.splice(currentIndex, 1);
      if(this.messages.length<6) this.getNewMessages();
    }
    else{
      e.source._dragRef.reset();
    }
  }
}
