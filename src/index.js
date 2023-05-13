import "./css/main.css";
import "./scss/main.scss";
import { bootstrap } from "./framework/core/bootstrap";
import { appModule } from "./app/app.module";
import { wfm } from "./framework/tools/utils";

// delay preloader
wfm.delay(500).then(() => {
  bootstrap(appModule);
});
