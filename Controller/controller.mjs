export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  add () {
    this.view.add();
    for (const item of document.getElementsByClassName('js-delete')) {
      item.addEventListener('click', () => this.view.delete(event.target));
    }
  }

  init() {
    this.view.init();
      this.view.formBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.add();
        });
        for (const item of document.getElementsByClassName('js-delete')) {
          item.addEventListener('click', () => this.view.delete(event.target));
        }
      this.view.formSort.addEventListener('click', (event) => {
        event.preventDefault();
        this.view.sortRender(this.model.sort(event));
      }
      );
   
  }
    
}