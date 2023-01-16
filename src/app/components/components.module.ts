import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const COMPONENTS = [NavComponent, FooterComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
  ],
  exports: COMPONENTS,
})
export class ComponentsModule {}
