import { router } from "../tools/router";
import { wfm } from "../tools/utils";

export class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponent = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    this.initComponents();
    if (this.routes) this.initRoutes();
  }
  initComponents() {
    this.bootstrapComponent.render();
    this.components.forEach((c) => this.renderComponent.bind(this));
  }

  initRoutes() {
    window.addEventListener("hashchange", this.renderRoute.bind(this));
    this.renderRoute();
  }
  //find current route and compare it
  renderRoute() {
    let url = router.getUrl();
    let route = this.routes.find((r) => r.path === url);

    if (wfm.isUndefiend(route)) {
      route = this.routes.find((r) => r.path === "**");
    }
    document.querySelector(
      "router-outlet"
    ).innerHTML = `<${route.component.selector}></${route.component.selector}>`;
    this.renderComponent(route.component);
  }
  // for realization a life cycle of component and more flexiablility of code
  renderComponent(component) {
    component.render();
  }
}
