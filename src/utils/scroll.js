export const scrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    const scrollTop = element.offsetTop;
    element.scrollIntoView({
      top: scrollTop,
      block: "start",
      behavior: "smooth",
    });
  }
};
