import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SkeletonModule } from './shared/skeleton/skeleton.module';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderComponent } from './components/includes/header/header.component';
import { FooterComponent } from './components/includes/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { SidebarModule } from 'primeng/sidebar';
import { CarouselModule } from 'primeng/carousel';

import { PipeModule } from './pipe/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    SkeletonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule,
    SidebarModule,
    CarouselModule,

    PipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
