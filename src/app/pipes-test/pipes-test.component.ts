import { Component, OnInit } from '@angular/core';
import localeRu from "@angular/common/locales/ru";
import {registerLocaleData} from "@angular/common";
registerLocaleData(localeRu, "ru");

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent implements OnInit {
pi: number=3.1415;
message: string;
x: number = 23.45;
dateFromString: string = "Tue Nov 24 2020 18:54:58 GMT+0200";
dateFromObject: Date = new Date(2020, 10, 24);
dateFromNumber: number = 1606236898844;
technologies: string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.technologies.push("C#");
    this.technologies.push("C#");
    this.technologies.push("C#");
    this.technologies.push("C#");
    this.technologies.push("C#");
    this.technologies.push("C#");
  }

}
