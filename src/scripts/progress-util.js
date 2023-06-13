export function setDim(that) {
  var body = document.body,
    html = document.documentElement;

  that.siteHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  that.screenHeight = window.outerHeight;
}
export function handleScroll(that) {
  that.scrollValue = window.scrollY;
  that.scrollPercent =
    (that.scrollValue / (that.siteHeight - that.screenHeight)) * 100;
}
