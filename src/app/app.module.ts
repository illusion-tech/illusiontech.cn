import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { IndexComponent } from './pages/index/index.component';

const COMPONENTS = [IndexComponent];

const MODULES = [ComponentsModule];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
