import mutationObserver from '@/scripts/utils/mutationObserver';
import Loader from "@/scripts/components/ui/Loader";

export default class Hero {
  private heroElement: HTMLElement | null;

  constructor() {
    this.heroElement = document.querySelector("[data-hero]");
    if (!this.heroElement) return;

    this.init();
  }

  init() {
    console.log("Hello Hero!");
    this.setupStyle();
    mutationObserver(this.opening.bind(this), Loader.classes.isLoaded, document.documentElement, 500);
  }

  setupStyle() {}

  opening() {}
}
