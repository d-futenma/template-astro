export default class Loader {
  private loaderElement: HTMLDivElement | null;

  static get classes() {
    return {
      isLoaded: "is-loaded",
    };
  }

  constructor() {
    this.loaderElement = document.querySelector<HTMLDivElement>("[data-loader]");
    if (!this.loaderElement) return;

    this.init();
  }

  private init() {
    window.addEventListener("load", async () => {
      history.scrollRestoration = "manual";
      await this.addClass();
      await this.removeElement();
    });
  }

  private addClass(): Promise<void> {
    return new Promise((resolve) => {
      document.documentElement.classList.add(Loader.classes.isLoaded);
      resolve();
    });
  }

  private removeElement(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => this.loaderElement!.remove(), 500);
      resolve();
    });
  }
}
