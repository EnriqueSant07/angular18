import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isExpanded: boolean = false; // Controla el tamaño del sidebar
  isDropdownOpen: boolean = false; // Controla el submenú desplegable

  toggleSidebar() {
    this.isExpanded = !this.isExpanded; // Alterna entre expandido/colapsado
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Alterna el submenú desplegable
  }
}
