import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] ,
    imports: [CommonModule], // Corrected from 'styleUrl' to 'styleUrls'
})
export class HeaderComponent {
  article = [
    {
      id: 1,
      title: 'Test 1',
      excerpt: 'Hello, Ritika!!!'
    },
    {
      id: 2,
      title: 'Test 2',
      excerpt: 'Hello, Saumya!!'
    },
    {
      id: 3,
      title: 'Test 3',
      excerpt: 'Hello, Vaishu!!'
    },
    {
      id: 4,
      title: 'Test 4',
      excerpt: 'Hello, Veronica!!'
    }
  ];
}
