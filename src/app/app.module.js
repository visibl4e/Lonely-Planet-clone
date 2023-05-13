import { WFMModule } from "../framework";
import { appComponent } from "./app.components";
import { appRoutes } from "./app.routes";

class AppModule extends WFMModule {
  constructor(config) {
    super(config);
  }
}

export const appModule = new AppModule({
  components: [],
  bootstrap: appComponent,
  routes: appRoutes,
});
