import app from "../main.js";
import p5 from "p5";
var frame = 0;

class TypeWriter {
  constructor(text = "text", pointer = "pointer", speed = 7) {
    this.finalText = app._instance.data[text];
    this.text = text;
    app._instance.data[this.text] = "";
    this.pointer = pointer;

    this.letterIdx = 0;
    this.speed = speed;
    this.timer = -1;
    this.finished = false;
  }
  toggle(frame, speed = 15) {
    if (frame % speed == 0)
      app._instance.data[this.pointer] = !app._instance.data[this.pointer];
  }
  update(word) {
    if (word && this.timer <= 0)
      app._instance.data[this.text] = app._instance.data[this.text] + `${word}`;

    this.letterIdx += 1;
  }
  write(frame) {
    if (this.finished) return;
    if (frame % this.speed == 0 && this.timer <= 0) {
      if (this.letterIdx < this.finalText.length) {
        const word = this.finalText[this.letterIdx];

        this.update(word);
        if (word == " " && this.timer <= -1) this.timer = 2;
      } else {
        this.finished = true;
      }
    } else this.timer -= 1;
  }
}
const aboutWriter = new TypeWriter("aboutText", "pointer", 3);
const titleWriter = new TypeWriter("aboutTitle", "titlePointer", 5);
var frame = 0;

const newSketch = function (p5) {
  p5.setup = () => {
    p5.noCanvas();
  };

  p5.draw = () => {
    frame += 1;

    titleWriter.toggle(frame);
    titleWriter.write(frame);
    if (titleWriter.finished) {
      aboutWriter.toggle(frame);
      aboutWriter.write(frame);
    }
  };
};

new p5(newSketch);
