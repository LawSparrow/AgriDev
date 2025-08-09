import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, MatSidenavContainer, MatSidenavModule, MatToolbar, MatListItem, MatNavList, RouterOutlet, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items = [
    { name: 'Home', link: '/home'},
  ];
}
