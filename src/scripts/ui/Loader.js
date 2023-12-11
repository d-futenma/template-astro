export default class Loader {
  static get CLASSES() {
    return {
      isLoaded: 'is-loaded',
    }
  }

  constructor() {
    this.$loader = document.querySelector('[data-loader]')
    if (!this.$loader) return
    this.bindLoadEvent()
  }

  bindLoadEvent() {
    window.addEventListener('load', this.handleWindowLoad.bind(this))
  }

  handleWindowLoad() {
    this.addClass()
    setTimeout(() => this.$loader.remove(), 500)
  }

  addClass() {
    document.documentElement.classList.add(Loader.CLASSES.isLoaded)
  }
}
