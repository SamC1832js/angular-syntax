import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModListComponent } from './mod-list/mod-list.component';
import { ModDetailComponent } from './mod-detail/mod-detail.component';
import { ModTemplateFormComponent } from './mod-template-form/mod-template-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ModListComponent },
      { path: ':id', component: ModTemplateFormComponent },
    ],
  },
];
@NgModule({
  declarations: [
    ModListComponent,
    ModDetailComponent,
    ModTemplateFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],
  exports: [ModListComponent, ModDetailComponent, ModTemplateFormComponent],
})
export class ModModule {}
