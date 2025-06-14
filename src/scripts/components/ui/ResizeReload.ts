import config from "@/scripts/utils/config";

export default class ResizeReload {
  private mq: MediaQueryList;

  constructor() {
    this.mq = window.matchMedia(`(min-width: ${config.viewport.md}px)`);
    this.bindEvent();
  }

  private bindEvent() {
    this.mq.addEventListener("change", () => location.reload());
  }
}
