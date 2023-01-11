import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {NavigateItem} from "../models/navigate-item.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {

  @Input()
  items: NavigateItem[] = [];

  constructor(private router: Router) {}

  onRedirect(path: string): void {
    this.router.navigateByUrl(path).then();
  }
}
