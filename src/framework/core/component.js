import { wfm } from "../tools/utils";

export class Component {
  constructor(config) {
    this.template = config.template;
    this.selector = config.selector;
    this.el = null;
  }

  render() {
    //this.el is a root element for whole component
    this.el = document.querySelector(this.selector);
    if (!this.el)
      throw new Error(`Component with selector ${this.selector} wasn't found`);
    this.el.innerHTML = this.template;
    document.querySelector(this.selector).innerHTML = this.template;

    // adding methods for needed page JS
    // methods for home page
    this.initEvents();
    this.initMouseover();
    this.initMouseout();
    this.initOpenModal();
    // this.initCarouselClickButtons();

    //methods for destination page
    this.initClickPagination();
  }

  // adding js to Contacts page(.collapsible)
  initEvents() {
    if (wfm.isUndefiend(this.events)) return;

    let events = this.events();

    Object.keys(events).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[events[key]].bind(this));
    });
  }
  // adding js to homepage header
  initMouseover() {
    if (wfm.isUndefiend(this.mouseover)) return;

    let mouseover = this.mouseover();

    Object.keys(mouseover).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[mouseover[key]].bind(this));
    });
  }

  initMouseout() {
    if (wfm.isUndefiend(this.mouseleave)) return;

    let mouseleave = this.mouseleave();

    Object.keys(mouseleave).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[mouseleave[key]].bind(this));
    });
  }

  initCarouselClickButtons() {
    if (wfm.isUndefiend(this.carouselclickbuttons)) return;

    let carouselclickbuttons = this.carouselclickbuttons();

    Object.keys(carouselclickbuttons).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(
          listener[0],
          this[carouselclickbuttons[key]].bind(this)
        );
      this.el
        .querySelector(listener[2])
        .addEventListener(
          listener[0],
          this[carouselclickbuttons[key]].bind(this)
        );
    });
  }
  initOpenModal() {
    if (wfm.isUndefiend(this.openmodal)) return;

    let openmodal = this.openmodal();

    Object.keys(openmodal).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[openmodal[key]].bind(this));
    });
  }
  //method for destination page
  initClickPagination() {
    if (wfm.isUndefiend(this.onclickpagination)) return;

    let onclickpagination = this.onclickpagination();

    Object.keys(onclickpagination).forEach((key) => {
      let listener = key.split(" ");

      this.el
        .querySelector(listener[1])
        .addEventListener(listener[0], this[onclickpagination[key]].bind(this));
    });
  }
}
