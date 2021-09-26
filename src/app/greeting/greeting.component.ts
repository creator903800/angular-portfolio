import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  greeting= {
    username: "Vikash Singh",
    title: "Hi all, I'm Vikash",
    subTitle: "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Angular / React / Nodejs and some other cool libraries and frameworks.",
    resumeLink: "https://drive.google.com/file/d/1JU_-_M7-jmYAEBYARmIWjSW88Ph6miyT/view?usp=sharing"
  }

  ngOnInit(): void {
  }

}
