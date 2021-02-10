import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../model/move.model';

@Component({
  selector: 'app-moves-preview',
  templateUrl: './moves-preview.component.html',
  styleUrls: ['./moves-preview.component.scss']
})
export class MovesPreviewComponent implements OnInit {
@Input() move: Move
  constructor() { }

  ngOnInit(): void {
  }

}
