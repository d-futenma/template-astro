import Loader from "@/scripts/components/ui/Loader";
import Menu from "@/scripts/components/ui/Menu";
// import SmoothScroll from "@/scripts/components/ui/SmoothScroll";
// import Home from "@/scripts/pages/Home";

export default class App {
  constructor() {
    this.init();
  }

  private init() {
    console.log('app');
    Promise.all([new Loader()]).then(() => {
      new Menu();
      // new SmoothScroll();
      // new Home();
    });
  }
}
