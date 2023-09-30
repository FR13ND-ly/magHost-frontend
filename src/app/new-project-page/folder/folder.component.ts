import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[app-folder]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent {

  @Input()
  folder: any
  @Input()
  index: any

  @Output() navigate = new EventEmitter()
  @Output() delete = new EventEmitter()

  onDeleteItem() {
    this.delete.emit()
  }

  onEnterFolder() {
    this.navigate.emit()
  }
}
