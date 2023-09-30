import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  
  @Input() navigation : any

  @Output() navigate : any = new EventEmitter()

  onNavigate(i: any) {
    this.navigate.emit(i)
  }
}
