import { Component } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
})
export class ChatsComponent {
  chats = [
    {
      title: 'Chat 1',
    },
    {
      title: 'Chat 2',
    },
    {
      title: 'Chat 3',
    },
    {
      title: 'Chat 4',
    },
    {
      title: 'Chat 5',
    },
    {
      title: 'Chat 6',
    },
  ];
  isOpen = false;

  onToggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
