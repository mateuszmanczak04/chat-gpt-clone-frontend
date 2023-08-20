import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConversationService } from '../conversation.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
})
export class MessageFormComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    content: new FormControl(''),
  });
  isLoading = false;
  private isLoadingSub = new Subscription();

  constructor(private conversationService: ConversationService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.isLoadingSub = this.conversationService.isLoadingUpdated.subscribe(
      (isLoading: boolean) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy(): void {
    this.isLoadingSub.unsubscribe();
  }

  onSubmit() {
    const promptText = this.form.controls['content'].value;
    this.conversationService.onSendMessage(promptText);
    this.form.controls['content'].setValue('');
  }

  initializeForm() {
    this.form.setValue({
      content: '',
    });
    this.form.controls['content'].setValidators(Validators.required);
  }
}
