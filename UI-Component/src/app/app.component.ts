import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UI-Component';
  tryComponentItem = {
    title: "Upgrade for more permissions control",
    content: "Decide who can send invitations, edit team settings, and more with Business Class.",
    link: "#",
    textBtn: "Try for 14 days"
  }
}
