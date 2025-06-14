import OverscrollController from "@/scripts/utils/OverscrollController";

export default class Modal {
  private modalTriggerElements: HTMLDivElement[] = [];
  private modalElements: HTMLDivElement[] = [];
  // private modalOverlayElement: HTMLDivElement | null;
  private modalCloseElements: HTMLElement[] = [];

  private get classes() {
    return {
      isModalOpened: "is-modal-opened",
    };
  }

  constructor() {
    this.modalTriggerElements = [...document.querySelectorAll<HTMLDivElement>("[data-modal-trigger]")];
    this.modalElements = [...document.querySelectorAll<HTMLDivElement>("[data-modal]")];
    if (!this.modalTriggerElements.length && !this.modalElements.length) return;
    // this.modalOverlayElement = document.querySelector<HTMLDivElement>("[data-modal-overlay]");
    this.modalCloseElements = [...document.querySelectorAll<HTMLElement>("[data-modal-close]")];
  }

  init() {
    this.modalElements.forEach(modalElement => {
      const modalInnerElement: HTMLElement = modalElement.querySelector("[data-modal-inner]");
      new OverscrollController(modalElement, modalInnerElement);
    });
    
    this.bindEvents();
  }

  private bindEvents() {
    this.modalTriggerElements.forEach((modalTriggerElement) => {
      modalTriggerElement.addEventListener("click", this.showModal.bind(this));
    });
    this.modalCloseElements.forEach((modalCloseElement) => {
      modalCloseElement.addEventListener("click", this.hideModal.bind(this));
    });
  }

  private showModal(event: Event) {
    const dataModal = (event.currentTarget as HTMLElement).getAttribute("data-modal-target");

    this.modalElements.forEach((modalElement) => {
      const targetModal = modalElement.getAttribute("data-modal-id") === dataModal;

      if (targetModal) {
        modalElement.scrollTop = 0;
        modalElement.classList.add(this.classes.isModalOpened);
        // if (this.modalOverlayElement) {
        //   this.modalOverlayElement.classList.add(this.classes.isModalOpened);
        // }
      }
    });
  }

  private hideModal(event: Event) {
    const targetModal = (event.currentTarget as HTMLElement).closest("[data-modal]");

    if (targetModal) {
      targetModal.classList.remove(this.classes.isModalOpened);
      if (this.modalOverlayElement) this.modalOverlayElement.classList.remove(this.classes.isModalOpened);
    }
  }
}
