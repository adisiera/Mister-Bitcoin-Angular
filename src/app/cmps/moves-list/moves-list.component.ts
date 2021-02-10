import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../../model/move.model';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
@Input() moves: Move[]
  constructor() { }

  ngOnInit(): void {
  }

}
