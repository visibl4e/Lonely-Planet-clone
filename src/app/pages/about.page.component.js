import { WFMComponent } from "../../framework";

class AboutPageComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const aboutPageComponent = new AboutPageComponent({
  selector: "app-about-page",
  template: "<h1>About Page</h1>",
});
