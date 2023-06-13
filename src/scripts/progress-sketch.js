class ProgressBar {
  constructor(p5) {
    this.p5 = p5;
    this.div = p5.select("#progress-bar");
    console.log(this.div);
  }

  setWidth(wPercent) {
    this.div.style("width", `${wPercent}%`);
  }
}
var scrollValue = 2;
var screenHeight;
var siteHeight;
var bar;
function setDim() {
  var body = document.body,
    html = document.documentElement;

  siteHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  screenHeight = window.outerHeight;
  scrollValue = window.scrollY;
}

export default function (p5) {
  p5.setup = () => {
    setDim();
    p5.noCanvas();
    bar = new ProgressBar(p5);
    bar.setWidth(scrollValue);
  };

  p5.windowResized = () => {
    setDim();
  };
  p5.draw = () => {
    scrollValue = document.documentElement.scrollTop;
    const scrollPercent = (scrollValue / (siteHeight - screenHeight)) * 100;
    bar.setWidth(scrollPercent + 2);
  };
}
