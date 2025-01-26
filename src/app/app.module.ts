import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModModule } from './mod/mod.module';
import { ModService } from './service/mod.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModModule,
    HttpClientModule,
  ],
  providers: [ModService],
  bootstrap: [AppComponent],
})
export class AppModule {}
