// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

window.addEventListener("load", () => {
  const sectionOne = document.querySelector('.section-0');
  document.documentElement.classList.remove("_step-01", "_step-02", "_step-03");

  setTimeout(() => {
    document.documentElement.classList.add("_step-01");
    sectionOne.style.pointerEvents = "none";
    setTimeout(() => {
      document.documentElement.classList.add("_step-02");

      setTimeout(() => {
        document.documentElement.classList.add("_step-03");

        setTimeout(() => {
          sectionOne.style.pointerEvents = "all";
        }, 2500);
      
      }, 600);

    }, 3500);

  }, 0);
});

const videoYoutubeButtons = document.querySelectorAll('.video-youtube__button');
videoYoutubeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const youTubeCode = this.getAttribute('data-youtube');
        let autoplay = true; // Автоплей разрешено (true) или нет (false)

        let urlVideo = `https://www.youtube.com/embed/${youTubeCode}?rel=0&showinfo=0`;

        const iframe = document.createElement('iframe');
        iframe.setAttribute('allowfullscreen', '');

        if (autoplay) {
            urlVideo += '&autoplay=1';
            iframe.setAttribute('allow', 'autoplay; encrypted-media');
        }

        iframe.setAttribute('src', urlVideo);

        const body = this.closest('.video-youtube__body');
        body.innerHTML = '';
        body.appendChild(iframe);
        body.classList.add('video-added');
    });
});