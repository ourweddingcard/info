import ReactDOM from "react-dom/client";
import { YMaps } from "react-yandex-maps";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <YMaps>
    <App />
  </YMaps>
);
