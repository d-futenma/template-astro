import detect from '@/scripts/utils/detect';

export default class ModalYtPlayer {
  private modalTriggerElements: HTMLDivElement[] = [];
  private modalCloseElements: HTMLElement[] = [];
  private modalElements: HTMLDivElement[] = [];
  private player: YT.Player | null = null;

  private get classes() {
    return {
      isThumbShow: 'is-thumb-show',
      isThumbHide: 'is-thumb-hide',
    };
  }

  constructor() {
    this.modalTriggerElements = [...document.querySelectorAll<HTMLDivElement>('[data-modal-target^="video"]')];
    this.modalElements = [...document.querySelectorAll<HTMLDivElement>('[data-modal]')];
    if (!this.modalTriggerElements.length && !this.modalElements.length) return;
    this.modalCloseElements = [...document.querySelectorAll<HTMLElement>('[data-modal-close]')];

    this.init();
  }

  init() {
    this.loadYouTubeAPI();
    this.bindEvents();
  }

  private loadYouTubeAPI() {
    if (document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) return;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
  }

  private bindEvents() {
    this.modalTriggerElements.forEach((modalTriggerElement) => {
      modalTriggerElement.addEventListener('click', this.handleTriggerClick.bind(this));
    });
    this.modalCloseElements.forEach((modalCloseElement) => {
      modalCloseElement.addEventListener('click', this.handleCloseClick.bind(this));
    });
  }

  private handleTriggerClick(event: Event) {
    const targetModalId = (event.currentTarget as HTMLElement).getAttribute('data-modal-target');
    const targetModalElement = this.modalElements.find((modalElement) => modalElement.getAttribute('data-modal-id') === targetModalId);
    const youtubeElement = targetModalElement!.querySelector<HTMLElement>('[data-youtube]');

    this.createYtPlayer(youtubeElement!);
    this.hideThumb(youtubeElement!);
  }

  private handleCloseClick(event: Event) {
    const targetModalElement = (event.currentTarget as HTMLElement).closest('[data-modal]');

    if (targetModalElement && targetModalElement instanceof HTMLElement) {
      this.destroyPlayer();
      this.showThumb(targetModalElement);
    }
  }

  private createYtPlayer(youtubeElement: HTMLElement) {
    const youtubeIdElement = youtubeElement.querySelector<HTMLElement>('[data-youtube-id]');
    const youtubeId = youtubeIdElement!.getAttribute('data-youtube-id');

    if (youtubeId) {
      if (this.player) this.player.destroy();
      this.player = new YT.Player(youtubeIdElement!, {
        videoId: youtubeId,
        playerVars: {
          autoplay: detect.isMobile() ? 0 : 1,
          controls: 1,
        },
        events: {
          onReady: (event) => {
            if (!detect.isMobile()) event.target.playVideo();
          },
        },
      });
    }
  }

  private destroyPlayer() {
    if (this.player) {
      this.player.stopVideo();
      this.player.destroy();
      this.player = null;
    }
  }

  private showThumb(modalElement: HTMLElement) {
    const thumb = modalElement.querySelector('[data-youtube-thumb]');
    if (thumb) {
      thumb.classList.remove(this.classes.isThumbHide);
      thumb.classList.add(this.classes.isThumbShow);
    }
  }

  private hideThumb(modalElement: HTMLElement) {
    const thumb = modalElement.querySelector('[data-youtube-thumb]');
    if (thumb) {
      thumb.classList.remove(this.classes.isThumbShow);
      thumb.classList.add(this.classes.isThumbHide);
    }
  }
}
