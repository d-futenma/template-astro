export default class Menu {
  private menuButtonElement: HTMLButtonElement | null;
  private menuElement: HTMLDivElement | null;
  private menuCloseElements: HTMLElement[] = [];

  private get classes() {
    return {
      isMenuOpened: "is-menu-opened",
    };
  }

  constructor() {
    this.menuButtonElement = document.querySelector<HTMLButtonElement>("[data-menu-btn]");
    this.menuElement = document.querySelector<HTMLDivElement>("[data-menu]");
    if (!this.menuButtonElement || !this.menuElement) return;
    this.menuCloseElements = [...this.menuElement.querySelectorAll<HTMLElement>("[data-menu-close]")];

    this.init();
  }

  private init() {
    this.setupStyle();
    this.bindEvents();
  }

  private setupStyle() {}

  private bindEvents() {
    this.menuButtonElement!.addEventListener("click", this.toggleMenu.bind(this));
    this.menuCloseElements.forEach((menuCloseElement) => {
      menuCloseElement.addEventListener("click", this.hideMenu.bind(this));
    });
    this.menuElement!.addEventListener("click", this.handleLinkClick.bind(this));
  }

  private toggleMenu() {
    document.documentElement.classList.contains(this.classes.isMenuOpened) ? this.hideMenu() : this.showMenu();
  }

  private showMenu() {
    this.menuElement!.scrollTop = 0;
    document.documentElement.classList.add(this.classes.isMenuOpened);
  }

  private hideMenu() {
    if (!document.documentElement.classList.contains(this.classes.isMenuOpened)) return;
    document.documentElement.classList.remove(this.classes.isMenuOpened);
  }

  private handleLinkClick(event: MouseEvent) {
    const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
    const noClose = link?.hasAttribute("data-menu-no-close");
    if (!link || noClose) return;

    this.hideMenu();
  }
}
