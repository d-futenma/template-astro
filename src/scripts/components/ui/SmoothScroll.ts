export default class SmoothScroll {
  private anchorElements: HTMLAnchorElement[] = [];

  constructor() {
    this.anchorElements = [...document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')];
    if (!this.anchorElements.length) return;

    this.init();
  }

  private init() {
    this.bindEvent();
  }

  private bindEvent() {
    this.anchorElements.forEach((anchorElement) => {
      anchorElement.addEventListener("click", this.handleClick);
    });
  }

  private handleClick(event: Event) {
    if (!(event.currentTarget instanceof HTMLAnchorElement)) return;

    const clickedUrl = new URL(event.currentTarget.href);
    const currentUrl = new URL(window.location.href);

    if (clickedUrl.pathname === currentUrl.pathname) {
      event.preventDefault();
      event.stopImmediatePropagation();

      const target = clickedUrl.hash || 0;

      gsap.to(window, {
        duration: 1.0,
        scrollTo: target,
        ease: "power2.out",
      });
    }
  }
}
