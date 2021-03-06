import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { bounceInDown } from 'ng-animate';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public line1: string = 'Hello and welcome.';
  public line2: string = "My name is Jason, I'm a web developer.";
  public line3: string = 'This is my portfolio.';
  public line4: string = 'Thanks for stopping by!';

  public lineOneAnimation: TextAnimation = {
    animation: bounceInDown,
    delay: 300,
    type: 'word',
  };

  public lineTwoAnimation: TextAnimation = {
    animation: bounceInDown,
    delay: 400,
    type: 'word',
  };

  public lineFourAnimation: TextAnimation = {
    animation: bounceInDown,
    delay: 500,
    type: 'word',
  };
}
