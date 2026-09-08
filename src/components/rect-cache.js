export function createRectCache(element) {
  let rect = element.getBoundingClientRect();

  function update() {
    rect = element.getBoundingClientRect();
  }

  const resizeObserver = new ResizeObserver(update);
  resizeObserver.observe(element);

  window.addEventListener("scroll", update, true);
  window.addEventListener("resize", update);

  return {
    get current() {
      return rect;
    },
    destroy() {
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    },
  };
}
