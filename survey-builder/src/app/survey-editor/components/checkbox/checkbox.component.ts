import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'check-box',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() text: string;
  @Input() type: string;
  @Input() isChecked = false;
  @Output() select: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  onChange() {
    this.isChecked = !this.isChecked;
    if (this.isChecked) {
      this.select.emit(true);
    } else {
      this.select.emit(false);
    }
  }
}
