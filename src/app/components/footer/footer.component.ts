import { Component, OnInit } from '@angular/core';
import { ISelect } from '../../interface/select.interface';

enum Theme {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public selectorTitle = $localize`主题:`;
  public themes: ISelect[] = [
    { label: $localize`白色`, value: Theme.Light },
    { label: $localize`黑色`, value: Theme.Dark },
    { label: $localize`跟随系统`, value: Theme.System },
  ];
  public defaultTheme?: ISelect;

  constructor() {}

  public changeTheme(theme: ISelect): void {
    switch (theme.value) {
      case Theme.Light:
        document.documentElement.classList.remove('dark');
        break;
      case Theme.Dark:
        document.documentElement.classList.add('dark');
        break;
      case Theme.System:
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? document.documentElement.classList.add('dark')
          : document.documentElement.classList.remove('dark');
        break;
    }
    localStorage['theme'] = theme.value;
  }

  public backupTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  ngOnInit(): void {
    this.defaultTheme = localStorage['theme']
      ? this.themes.find((_) => _.value === localStorage['theme'])
      : this.themes[0];
  }
}
