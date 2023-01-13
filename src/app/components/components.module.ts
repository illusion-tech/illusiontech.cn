import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';

const COMPONENTS = [
  NavComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [
  ],
  exports: COMPONENTS,
})
export class ComponentsModule {}
