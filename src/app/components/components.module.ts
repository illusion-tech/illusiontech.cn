import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SelectComponent } from './select/select.component';

const COMPONENTS = [NavComponent, FooterComponent, SelectComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
  exports: COMPONENTS,
})
export class ComponentsModule {}
