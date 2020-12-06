import { Component, OnInit } from '@angular/core';
import { Link } from 'src/link';
import { Resume } from '../Resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
resume: Resume;
links: Link[]=[];
  constructor() { }
  ngOnInit(): void {
    this.resume =new Resume();
    this.resume.name="Hordiienko Volodymyr";
    this.resume.phone="+38 (097) 937-99-92";
    this.resume.city="Kropyvnytskyi";
    this.resume.experience=11;
    this.resume.photo="../../assets/images/dzhonni-depp.webp";
    this.resume.skills;
    this.resume.skills.push("Create ADO.NET");
    this.resume.skills.push("Create WPF");
    this.resume.skills.push("Create Angular");
    this.links.push({url:"https://github.com/volidenko", text:"github"});
    this.links.push({url:"https://www.facebook.com/profile.php?id=100015379385935", text:"facebook"});
    this.links.push({url:"https://portal.azure.com/?quickstart=True#home", text:"azure"});
  }
}