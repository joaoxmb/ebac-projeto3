const parallax = class {
  controller = new AbortController();
  element;
  callback;
  stop = false;

  constructor(selectors, callback) {
    if (!callback) {
      return "Você declarou mas não está utilizando está função"  
    }

    switch(typeof selectors) {
      case('string'):
        this.element = document.querySelector(selectors)
        break;
      case('object'):
        this.element = selectors
        break;
      default:
        return selectors + "não é um elemento válido!"
    }

    this.callback = callback
    
    document.addEventListener('scroll', e => this.progress(e), {signal: this.controller.signal})
  }

  async progress(e) {
    const {height, top} = this.element.getBoundingClientRect()
    const windowHeihgt = window.innerHeight

    const progress = ((windowHeihgt - top) / height)
    
    if (progress > 1 || progress < 0) {
      if (!this.stop) {
        this.stop = true
        this.callback(this.element, progress > 1 ? 1 : 0)
      }
      return e.preventDefault()
    }

    if (this.stop) {
      this.stop = false
    }

    this.callback(this.element, progress)
  }
  
  abort() {
    console.log('aborted', this.element);
    this.controller.abort()
    this.callback(this.element, 1)
  }
}

export default parallax