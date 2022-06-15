import Logo from "./extensions/books.svg";
import FavIcon from "./extensions/favicon.ico";

export default {
  config: {
    auth: {
      logo: Logo,
    },
    menu: {
      logo: Logo,
    },
    head: {
      favicon: FavIcon,
    },
    translations: {
      en: {
        "Auth.form.welcome.title": "SpongeBobbiii Books",
        "Auth.form.welcome.subtitle": "Website Content Manager",
        "app.components.LeftMenu.navbrand.title": "SpongeBobbiii Books",
        "app.components.LeftMenu.navbrand.workplace": "Website Content Manager",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
