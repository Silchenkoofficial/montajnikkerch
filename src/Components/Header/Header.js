import React from "react";
import { useMediaQuery } from "react-responsive";
import Drawer from "../Drawer/Drawer";
import HeaderDesktop from "./HeaderDesktop";
import HeaderTablet from "./HeaderTablet";

function Header() {
  const isDesktop = useMediaQuery({ query: "(min-width: 971px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 970px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 431px)" });

  const [isMenuOpened, setMenuOpened] = React.useState(false);
  const toggleDrawer = () => {
    setMenuOpened(!isMenuOpened);
  };

  return (
    <React.Fragment>
      {isDesktop && <HeaderDesktop />}
      {isTablet && <HeaderTablet toggleMenu={toggleDrawer} />}
      {(isTablet || isMobile) && isMenuOpened && (
        <Drawer toggleMenu={toggleDrawer} />
      )}
    </React.Fragment>
  );
}

export default Header;
