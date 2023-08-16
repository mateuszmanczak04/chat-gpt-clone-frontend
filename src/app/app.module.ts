import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatsComponent } from './chats/chats.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@NgModule({
  declarations: [AppComponent, ChatsComponent, ConversationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Menu, X }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
