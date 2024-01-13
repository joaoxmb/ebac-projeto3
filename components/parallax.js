const parallax = class {
  controller = new AbortController();
  element;
  callback;
  adjuste;
  stop = false;

  constructor(selectors, callback, adjuste) {
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
    this.adjuste = adjuste ? adjuste : 1
    
    document.addEventListener('scroll', e => this.progress(e), {signal: this.controller.signal})
  }

  async progress(e) {
    const {height, top} = this.element.getBoundingClientRect()
    const windowHeihgt = window.innerHeight

    let progress = (((windowHeihgt * this.adjuste) - top) / height)
        progress = progress < 0 ? 0 : progress > 1 ? 1 : progress

    if (progress === 0 || progress === 1){
      if (!this.stop) {
        this.callback(this.element, Math.round(progress))
        this.stop = true
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