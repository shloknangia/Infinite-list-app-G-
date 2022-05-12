import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-card',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: any;
  @Input() baseUrl: any;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.message);
  }

  getprofileUrl(message:any){
    return this.baseUrl + message['author'].photoUrl;
  }

}
