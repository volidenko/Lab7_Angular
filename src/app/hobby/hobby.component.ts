import { Component, OnInit } from '@angular/core';
import { Hobby } from '../Hobby';

@Component({
  selector: 'app-hobby',
  templateUrl: './hobby.component.html',
  styleUrls: ['./hobby.component.css']
})
export class HobbyComponent implements OnInit {
  hobby: Hobby[];
  constructor() { }

  ngOnInit(): void {
    this.hobby = [];
    let hobby1: Hobby = new Hobby();
    let hobby2 = new Hobby();
    let hobby3 = new Hobby();
    hobby1.title = "Коллекционирование винтажных печатных машинок";
    hobby1.description = "Голливудский актер и обладатель премии «Оскар» Том Хэнкс увлекается коллекционированием винтажных печатных машинок. Причем они не просто пылятся на полках, Хэнкс еще и пишет книги. Иногда он даже берет печатные агрегаты с собой на съемки — это помогает отвлечься и расслабиться. В 2014 году актер выпустил приложение Hanx Writer для iPhone, с помощью которого на телефоне можно печатать с таким же звуком, как и на машинке.";
    hobby1.imageUrl = "../../assets/images/21.jpeg";
    hobby2.title = "Дрессировка голубей";
    hobby2.description = "Агрессивному на ринге Майку Тайсону в жизни нравится не откусывать людям уши, а заниматься дрессировкой голубей. В детстве он даже подрался с парнями, которые мучили птиц. Так что если не голуби, то Тайсон не стал бы боксером. Сейчас бывший спортсмен разводит птиц — на заднем дворе его дома живет около сотни голубей.";
    hobby2.imageUrl = "../../assets/images/30.jpg";
    hobby3.title = "Коллекционирование жуков и скелетов животных";
    hobby3.description = "Еще одно не менее странное увлечение — коллекционирование жуков и скелетов животных, а также личных вещей писателя Джека Керуака. Хотя последнее, пожалуй, как раз-таки самое безобидное. Ну кто бы не хотел, скажите, иметь под рукой несколько вещей своего любимого писателя?";
    hobby3.imageUrl = "../../assets/images/23.jpg";
    this.hobby.push(hobby1);
    this.hobby.push(hobby2);
    this.hobby.push(hobby3);
  }
}