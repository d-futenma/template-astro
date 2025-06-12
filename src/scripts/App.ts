import Loader from "@/scripts/components/ui/Loader";
import ResizeReload from "@/scripts/components/ui/ResizeReload";
import Menu from "@/scripts/components/ui/Menu";
import SmoothScroll from "@/scripts/components/ui/SmoothScroll";
// import Home from "@/scripts/pages/Home";

export default class App {
  constructor() {
    this.init();
  }

  private init() {
    Promise.all([new Loader()]).then(() => {
      new ResizeReload();
      new Menu();
      new SmoothScroll();
      // new Home();
    });
  }
}
