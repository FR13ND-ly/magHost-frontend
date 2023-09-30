import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  
  @Input()
  result: any

  url: any

  @Output()
  close: any = new EventEmitter()

  ngOnInit(): void {
    // this.url = location.protocol + this.result.name + '.' + location.hostname
    this.url = location.protocol + '//' + this.result.name + '.' + "localhost:5000"
  }

  onClose() {
    this.close.emit()
  }
}
