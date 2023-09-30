import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  
  @Output() single = new EventEmitter()
  @Output() multiple = new EventEmitter()
  @Output() uploadFolder = new EventEmitter()
  @Output() createFolder = new EventEmitter()

}
