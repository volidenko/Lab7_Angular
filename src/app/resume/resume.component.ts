import { Component, OnInit } from '@angular/core';
import { Resume } from '../Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
resume: Resume;
  constructor() { }

  ngOnInit(): void {
    this.resume =new Resume();
    this.resume.name="Hordiienko Volodymyr";
    this.resume.phone="+38 (097) 937-99-92";
    this.resume.city="Kropyvnytskyi";
  }
}