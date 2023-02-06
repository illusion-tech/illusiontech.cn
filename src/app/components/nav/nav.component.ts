import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  public menuExpand = false;

  #handler = (event: MouseEvent): void => {
    const target = event.target as HTMLElement;
    if (!target.className.includes('panel')) this.toggleMenu(event);
  };

  public toggleMenu($event: Event): void {
    $event.stopPropagation();
    this.menuExpand = !this.menuExpand;
    this.menuExpand
      ? document.addEventListener('click', this.#handler, false)
      : document.removeEventListener('click', this.#handler, false);
  }
}
