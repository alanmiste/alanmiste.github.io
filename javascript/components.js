//---- Header ----
const header = document.querySelector(".header");
header.innerHTML = `
<div class="header__content">
        <div class="header__logo-container">
          <div class="header__logo-img-cont">
            <img
              src="./assets/jpeg/AlanMiste-ProPic.png"
              alt="Alan Miste Logo Image"
              class="header__logo-img"
            />
          </div>
          <h1 class="header__logo-sub">Alan Miste</h1>
        </div>
        <div class="header__main">
        <div class="language-switcher">
          <button data-lang="de">DE</button>
          <button data-lang="en">EN</button>
         </div>
            <ul class="header__links">
            <li class="header__link-wrapper">
              <a href="./index.html#up" class="header__link" data-translate-key="home">Startseite</a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#about" class="header__link" data-translate-key="about">Über mich</a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#projects" class="header__link" data-translate-key="projects">Projekte</a>
            </li>
            <li class="header__link-wrapper">
              <a href="./index.html#contact" class="header__link" data-translate-key="contact">Kontakt</a>
            </li>
          </ul>
          <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
        </div>
      </div>
      <div class="header__sm-menu">
        <div class="header__sm-menu-content">
          <ul class="header__sm-menu-links">
            <li class="header__sm-menu-link">
              <a href="./index.html"> Home </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#about"> About </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#projects"> Projects </a>
            </li>

            <li class="header__sm-menu-link">
              <a href="./index.html#contact"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
`;

//---- Footer ----

const footer = document.querySelector(".main-footer");
footer.innerHTML = `
 <div class="main-container">
        <div class="main-footer__upper">
          <div class="main-footer__row main-footer__row-1">
            <h2 class="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div class="main-footer__social-cont">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/alanhassan"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/linkedin-ico.png"
                  alt="linkedin icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/alanmiste"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/github-ico.png"
                  alt="github icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://alanmiste.wordpress.com"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/wordpress-ico.png"
                  alt="wordpress icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/AlanMiste"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/x-twitter-icon.png"
                  alt="x twitter icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/alanmiste"
              >
                <img
                  class="main-footer__icon"
                  src="./assets/png/facebook-ico.png"
                  alt="facebook icon"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/alanmiste"
              >
                <img
                  class="main-footer__icon main-footer__icon--mr-none"
                  src="./assets/png/insta-ico.png"
                  alt="instagram icon"
                />
              </a>
            </div>
          </div>
          <div class="main-footer__row main-footer__row-2">
            <h4 class="heading heading-sm text-lt">Alan Miste</h4>
            <p class="main-footer__short-desc">
              Java-Software / MERN-Stack Developer
            </p>
          </div>
        </div>

        <div class="main-footer__lower">
          &copy; Copyright
          <script>
            document.write(new Date().getFullYear());
          </script>
          . Made by
          <a rel="noreferrer" target="_blank" href="https://alanmiste.github.io"
            >Alan Miste</a
          >
        </div>
      </div>`;
