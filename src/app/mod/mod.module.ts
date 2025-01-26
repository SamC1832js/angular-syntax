import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModListComponent } from './mod-list/mod-list.component';
import { ModDetailComponent } from './mod-detail/mod-detail.component';

@NgModule({
  declarations: [ModListComponent],
  imports: [CommonModule],
  exports: [ModListComponent, ModDetailComponent],
})
export class ModModule {}
