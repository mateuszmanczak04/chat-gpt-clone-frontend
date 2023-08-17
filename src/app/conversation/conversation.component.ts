import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
})
export class ConversationComponent {
  responseText = '';
  promptForm: FormGroup = new FormGroup({
    promptText: new FormControl('', { validators: [Validators.required] }),
  });
  isLoading = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.isLoading = true;
    const promptText = this.promptForm.controls['promptText'].value;
    this.promptForm.controls['promptText'].setValue('');
    this.http
      .post<string>(environment.apiUrl + '/openai', {
        promptText,
      })
      .subscribe(
        answer => {
          this.responseText = answer;
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
          console.log(err); // TODO handle errors
        }
      );
  }
}
