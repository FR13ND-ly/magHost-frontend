import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-file]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  
  @Input()
  file: any

  @Input()
  index: any

  @Output() delete = new EventEmitter()

  onDeleteItem() {
    this.delete.emit()
  }
}
