"use strict";

class Player {

  constructor() {

    this.speed = 2.5;
    this.x = 250;
    this.y = 0;
    this.w = 20;
    this.h = 20;

  }

  // displays the player
  show() {

    noStroke();
    fill(0, 50, 200);
    rect(this.x, this.y, this.w, this.h);

  }

  // allows the player to move
  keyPressed() {

    if (keyCode === UP_ARROW || label == "UP") {
      this.y-=this.speed;
    } else if (keyCode === DOWN_ARROW || label == "DOWN") {
      this.y+=this.speed;
    } else if (keyCode === LEFT_ARROW || label == "LEFT") {
      this.x-=this.speed;
    } else if (keyCode === RIGHT_ARROW || label == "RIGHT") {
      this.x+=this.speed;
    }

  }

  // restrains the positon of the player to the boundaries of the screen
  bound() {

    if (this.x > width - this.w) {
      this.x-=this.speed;
    } else if (this.x < 0) {
      this.x+=this.speed;
    } else if (this.y > height - this.h) {
      this.y-=this.speed;
    } else if (this.y < 0) {
      this.y+=this.speed;
    }

  }

}
