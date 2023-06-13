import app from "../main.js";
import p5 from "p5";

class ProgressBar {
  constructor(p5) {
    this.p5 = p5;
    this.div = p5.select("#progress-bar");
  }

  setWidth(wPercent) {
    this.div.style("width", `${wPercent}%`);
  }
}
var bar;

const mySketch = function (p5) {
  p5.setup = () => {
    p5.noCanvas();
    bar = new ProgressBar(p5);
    bar.setWidth(app._instance.data.scrollVal);
  };

  p5.draw = () => {
    bar.setWidth(app._instance.data.scrollPercent + 2);
  };
};

new p5(mySketch);
