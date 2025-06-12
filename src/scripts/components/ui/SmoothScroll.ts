import { easings } from "@/scripts/utils/easings";

export default class SmoothScroll {
  private anchorElements: HTMLAnchorElement[] = [];

  constructor() {
    this.anchorElements = [...document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]')];
    if (!this.anchorElements.length) return;
    this.bindEvent();
  }

  private get options() {
    return {
      duration: 1.0,
      delay: 0,
      easing: "easeOutCirc",
      offset: 0,
      disableAttribute: "data-smooth-scroll-disable",
    };
  }

  private bindEvent() {
    this.anchorElements.forEach((anchor) => {
      anchor.addEventListener("click", this.handleLinkClick.bind(this));
    });
  }

  private handleLinkClick(event: MouseEvent) {
    const link = event.currentTarget as HTMLAnchorElement;
    if (link.hasAttribute(this.options.disableAttribute)) return;

    const clickedUrl = new URL(link.href, location.origin);
    const currentUrl = new URL(location.href);
    const href = link.getAttribute("href") || "";

    if (clickedUrl.pathname === currentUrl.pathname && href.includes("#")) {
      event.preventDefault();

      let targetY: number;

      if (href === "#") {
        targetY = 0;
      } else {
        const hash = href.slice(href.indexOf("#"));
        const targetElement = document.querySelector(hash) as HTMLElement;
        if (!targetElement) return;
        targetY = window.scrollY + targetElement.getBoundingClientRect().top - this.options.offset;
      }

      this.animate(targetY);
    }
  }

  private animate(y: number) {
    const scrollEasing = easings[this.options.easing] ?? (() => 0);
    const startY = window.scrollY;
    const distance = y - startY;
    const startTime = performance.now() + this.options.delay * 1000;

    const step = (now: number) => {
      if (now < startTime) {
        requestAnimationFrame(step);
        return;
      }
      const elapsed = (now - startTime) / 1000;
      const t = Math.min(elapsed / this.options.duration, 1);
      const progress = scrollEasing(t);
      window.scrollTo(0, startY + distance * progress);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
}
