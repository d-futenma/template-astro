export default class OverscrollController {
  private scrollContainer: HTMLElement;
  private scrollContent: HTMLElement;

  constructor(scrollContainer: HTMLElement, scrollContent: HTMLElement) {
    this.scrollContainer = scrollContainer;
    this.scrollContent = scrollContent;
    if (!this.scrollContainer || !this.scrollContent) return;

    this.init();
  }

  private init() {
    this.setupStyle();
    this.bindEvent();
  }

  private setupStyle() {
    this.scrollContainer.style.overscrollBehavior = "none";

    const contentHeight = this.scrollContent.getBoundingClientRect().height;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;

    if (contentHeight <= viewportHeight) {
      this.scrollContent.style.height = "calc(100dvh + 1px)";
    }
  }

  private bindEvent() {
    window.addEventListener("resize", () => this.setupStyle());
  }
}
