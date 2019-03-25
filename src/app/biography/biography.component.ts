import { Component, OnInit } from '@angular/core';
import { Biography } from './biography.model';
@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  biography = new Biography('John O'+'\''+'Shea Televizian', 'This is simply a bio', 'https://static1.squarespace.com/static/573b45208259b594a269cf1e/t/5aac4214758d463a2205488f/1532538110872/c%26f_winter+2018_kitchen_baxter+miller-1.jpg')
  constructor() { }

  ngOnInit() {
  }

}
