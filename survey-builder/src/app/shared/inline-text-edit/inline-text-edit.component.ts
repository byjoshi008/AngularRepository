import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inline-text-edit',
  templateUrl: 'inline-text-edit.component.html',
  styleUrls: ['inline-text-edit.component.css']
})
export class InlineTextEditComponent {
  @Input() text: string;
  @Input() placeholder: string;
  @Input() inputClass: string;
  @Input() inputStyle: any;
  @Input() isEditable = true;

  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  handleChange() {
    this.textChange.emit(this.text);
  }
}
