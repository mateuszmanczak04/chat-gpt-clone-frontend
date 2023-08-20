import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Message } from '../message.model';
import { Subscription } from 'rxjs';
import { ConversationService } from '../conversation.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent implements AfterViewChecked, OnInit, OnDestroy {
  messages: Message[] = [];
  private messagesSub = new Subscription();
  isLoading = false;
  private isLoadingSub = new Subscription();

  constructor(
    private conversationService: ConversationService,
    private messagesContainer: ElementRef<HTMLDivElement>
  ) {}

  ngOnInit(): void {
    this.messagesSub = this.conversationService.messagesUpdated.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
    this.isLoadingSub = this.conversationService.isLoadingUpdated.subscribe(
      (isLoading: boolean) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.messagesSub.unsubscribe();
    this.isLoadingSub.unsubscribe();
  }

  scrollToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop =
        this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      return;
    }
  }
}
