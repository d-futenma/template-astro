import Loader from "@/scripts/components/ui/Loader";
import ResizeReload from "@/scripts/components/ui/ResizeReload";
import SmoothScroll from "@/scripts/components/ui/SmoothScroll";
import Menu from "@/scripts/components/ui/Menu";
import Modal from "@/scripts/components/ui/Modal";
import ModalYtPlayer from "@/scripts/components/ui/ModalYtPlayer";
// import Home from "@/scripts/pages/Home";

export default class App {
  private modal: Modal;

  constructor() {
    this.modal = new Modal();

    this.init();
  }

  private init() {
    Promise.all([new Loader()]).then(() => {
      new ResizeReload();
      new SmoothScroll();
      new Menu();
      this.modal.init();
      new ModalYtPlayer();
      // new Home();
    });
  }
}
