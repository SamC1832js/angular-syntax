import { Component, OnInit } from '@angular/core';
import { Mod } from '../models/mod';
import { ModService } from '../../service/mod.service';

@Component({
  selector: 'app-mod-list',
  templateUrl: './mod-list.component.html',
  styleUrls: ['./mod-list.component.css'],
})
export class ModListComponent implements OnInit {
  constructor(private modService: ModService) {}

  mods!: Mod[];
  selectedMod: Mod | null = null;

  ngOnInit(): void {
    this.modService.getMods().subscribe((data: Mod[]) => {
      console.log('Mod data:', data);
      this.mods = data;
    });
  }

  HandleRemove(mod: Mod) {
    console.log('Removing mod:', mod);
    this.mods = this.mods.filter((m) => m.id !== mod.id);
    this.selectedMod = null;
  }
  onSelect(mod: Mod): void {
    console.log('Selected mod:', mod);
    this.selectedMod = mod;
  }
}
