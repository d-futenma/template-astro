const getScrollBarWidth = (): number => {
  return window.innerWidth - document.documentElement.clientWidth;
};

const getScrollPosition = (isFixed: boolean): number => {
  if (isFixed) {
    return document.scrollingElement?.scrollTop ?? 0;
  }
  return parseInt(document.body.style.top || "0", 10);
};

const applyStyles = (scrollPosition: number, apply: boolean) => {
  const styles: Record<string, string> = {
    overflow: "hidden",
    position: "fixed",
    top: `${scrollPosition * -1}px`,
    left: "0",
    width: "100%",
    height: "100dvb",
  };

  Object.keys(styles).forEach((key) => {
    document.body.style.setProperty(key, apply ? styles[key] : "");
  });
};

const restorePosition = (scrollPosition: number) => {
  const options: ScrollToOptions = {
    behavior: "instant",
    top: scrollPosition * -1,
  };

  window.scrollTo(options);
};

export const scrollLock = (isFixed: boolean) => {
  const scrollBarWidth = getScrollBarWidth();
  const scrollPosition = getScrollPosition(isFixed);

  document.body.style.paddingRight = isFixed ? `${scrollBarWidth}px` : "";
  applyStyles(scrollPosition, isFixed);

  if (!isFixed) {
    restorePosition(scrollPosition);
  }
};
