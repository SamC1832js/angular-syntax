import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Mod } from '../models/mod';

@Component({
  selector: 'app-mod-detail',
  templateUrl: './mod-detail.component.html',
  styleUrls: ['./mod-detail.component.css'],
})
export class ModDetailComponent implements OnInit {
  @Input()
  detail!: Mod;

  @Output()
  delete: EventEmitter<Mod> = new EventEmitter<Mod>();

  constructor() {}

  ngOnInit(): void {}

  OnDelete() {
    console.log('Delete button clicked, emitting mod:', this.detail);
    this.delete.emit(this.detail);
  }
}
