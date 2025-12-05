import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Selection } from 'src/app/models/selection';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<Selection>();
  constructor() {}

  ngOnInit(): void {}

  onSelect(selection: string) {
    if (selection == Selection.recipes) {
      this.toggle.emit(Selection.recipes);
    } else {
      this.toggle.emit(Selection.shopping);
    }
  }
}
