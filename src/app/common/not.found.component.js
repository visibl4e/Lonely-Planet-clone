import { WFMComponent } from "../../framework";

class NotFound extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export const notFound = new NotFound({
  selector: "app-not-found",
  template: `
  <div style = "display: flex; align-items: center; justify-content: center">
    <div>
      <h2 style="background-c">Page not found</h2>
      <a href="#">Back home</a>
    </div>
  </div>
    `,
});
