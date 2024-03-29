import "../styles/style.css";
import "../styles/components/header.css";
import "../styles/components/hero.css";
import "../styles/components/about.css";
import "../styles/components/featured.css";
import "../styles/components/project.css";
import "../styles/components/contact.css";
import "../styles/components/footer.css";
import "../styles/components/mobile-nav.css";
import "../styles/utils.css";

import mobileNav from "./utils/mobile-nav";
import lightTheme from "./utils/light-theme";
import lazyLoading from "./utils/lazy-loading";
import carousel from "./utils/carousel";

mobileNav();
lightTheme();
lazyLoading();
carousel()