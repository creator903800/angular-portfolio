import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "",
    linkedin: "https://www.linkedin.com/in/sarthak-agrawal-a41aa3153/",
    gmail: "creator903800@gmail.com",
    instagram : "",
    facebook: ""
  };
  constructor() { }

  ngOnInit(): void {
  }

}
