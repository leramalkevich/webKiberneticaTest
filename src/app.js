import {Router} from "./router.js";
import "./styles/styles.scss";

class App {
    constructor() {
        new Router();
    }
}

(new App());