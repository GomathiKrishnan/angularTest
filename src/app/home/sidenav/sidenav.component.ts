import { Component, OnInit } from '@angular/core';
import { menu } from '../../interface/sidenav';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isToggle:boolean = true
  menuItems:Array<menu> = [
    {icon:'fa-solid fa-book-open', name: 'Recepies'},
    {icon:'fa-solid fa-heart', name: 'Favorites'},
    {icon:'fa-solid fa-book', name: 'Courses'},
    {icon:'fa-solid fa-globe', name: 'Community'}
  ]
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {

  }

  toggle(){
    this.commonService.sidenav(this.isToggle);
  }
}
