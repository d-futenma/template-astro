const getScrollBarWidth = (): number =>
  window.innerWidth - document.documentElement.clientWidth;

export const scrollLock = (isFixed: boolean) => {
  const scrollBarWidth = getScrollBarWidth();

  document.body.style.overflow = isFixed ? 'hidden' : '';
  document.body.style.paddingRight = isFixed ? `${scrollBarWidth}px` : '';
};
