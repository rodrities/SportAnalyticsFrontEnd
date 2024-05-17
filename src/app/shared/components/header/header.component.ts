import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  
  username: string | null  = localStorage.getItem('user')
  ngOnInit(): void {
    if (this.username !== null)
    this.username = this.username.split(' ')[0];
  }
}
