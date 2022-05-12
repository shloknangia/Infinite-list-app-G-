import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './message.service';
import { MatCardModule } from '@angular/material/card';
import { MessageComponent } from './message/message.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    MatCardModule,
    InfiniteScrollModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
