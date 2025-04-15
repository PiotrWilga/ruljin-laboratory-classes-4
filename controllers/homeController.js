const { MENU_LINKS } = require("../constants/navigation");

const getHomeView = (req, res) => {
  res.render("home", {
    headTitle: "Shop - Home",
    path: "/",
    activeLinkPath: "/",
    menuLinks: MENU_LINKS,
  });
};

module.exports = { getHomeView };
