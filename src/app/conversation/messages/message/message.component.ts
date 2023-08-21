import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  @Input() message: Message = {} as Message;
  @ViewChild('messageRef') messageRef: ElementRef<HTMLParagraphElement> =
    {} as ElementRef;
  // messageAsHtml: HTMLElement = new HTMLElement();
  messageAsHtml = '';

  ngOnInit(): void {
    /* adds a new line chars */
    this.messageAsHtml = this.message.content
      .split(/\n/)
      .map(m => m.trim())
      .join('<br />');
    // this.messageAsHtml = this.message.content.replace(/\n/g, '<br />');
    // this.messageAsHtml = this.messageAsHtml.replace(
    //   /`(.*?)`/g,
    //   '<pre class="overflow-x-scroll scrollbar-none"><code class="p-2 bg-gray-800 text-blue-500 rounded-sm">$1</code></pre>'
    // );
  }
}
