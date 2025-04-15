// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener("load", () => {

  document.documentElement.classList.remove("_step-01", "_step-02", "_step-03");

  setTimeout(() => {
    document.documentElement.classList.add("_step-01");

    setTimeout(() => {
      document.documentElement.classList.replace("_step-01", "_step-02");

      setTimeout(() => {
        document.documentElement.classList.replace("_step-02", "_step-03");

      }, 1000);

    }, 2500);

  }, 0);
});
