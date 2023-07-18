import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/themes';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-themes-list',
  templateUrl: './themes-list.component.html',
  styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
  themesList:Theme[] = []
  constructor(private apiService: ApiService, private userService: UserService){}

  get isLogged(): boolean{
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe(themes =>{         
      this.themesList = themes 
    } );
  }
}