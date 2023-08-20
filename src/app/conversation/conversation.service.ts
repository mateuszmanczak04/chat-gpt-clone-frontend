import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, finalize } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root',
})
export class ConversationService {
  messages: Message[] = [];
  messagesUpdated = new Subject<Message[]>();
  isLoading = false;
  isLoadingUpdated = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  onSendMessage(messageContent: string) {
    this.isLoading = true;
    this.isLoadingUpdated.next(this.isLoading);
    this.messages.push({ content: messageContent, sender: 'user' });
    this.messagesUpdated.next(this.messages);
    this.http
      .post<string>(environment.apiUrl + '/openai', {
        promptText: messageContent,
      })
      .pipe(
        finalize(() => {
          /* finalize executes whenever ends successfully or not */
          this.isLoading = false;
          this.isLoadingUpdated.next(this.isLoading);
        })
      )
      .subscribe({
        next: answer => {
          this.messages.push({ content: answer, sender: 'app' });
          this.messagesUpdated.next(this.messages);
        },
        error: err => {
          console.log(err); // TODO handle errors
        },
      });
  }
}
