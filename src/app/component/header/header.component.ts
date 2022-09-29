import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
  ngOnInit(): void {
  }

}
