import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesComponent } from './conversation/messages/messages.component';
import { MessageFormComponent } from './conversation/message-form/message-form.component';

@NgModule({
  declarations: [AppComponent, ChatsComponent, ConversationComponent, MessagesComponent, MessageFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Menu, X }),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
