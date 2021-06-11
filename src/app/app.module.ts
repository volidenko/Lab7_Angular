import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { JoinPipe } from './join.pipe';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExpComponent } from './work-exp/work-exp.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinPipe,
    ResumeComponent,
    SkillsComponent,
    WorkExpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }