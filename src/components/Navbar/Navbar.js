import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = (arg) => {
    setClick(false);
    if (arg === "home") {
      document
        .getElementById("hero-container")
        .scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }
    if (arg === "service") {
      document
        .getElementById("blog")
        .scrollIntoView({ block: "start", behavior: "smooth" });
      return;
    }
    document
      .getElementById("inner-container2")
      .scrollIntoView({ block: "center", behavior: "smooth" });
  };

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
        if (window.scrollY < 50) {
          setScrollDown(false);
        } else {
          setScrollDown(true);
        }
        document.querySelector("#navbar").style.marginTop = "0";
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        setScrollDown(true);
        document.querySelector("#navbar").style.marginTop = "-100%";
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav
      id="navbar"
      className={
        click ? "navbar active" : `${scrollDown ? "navbarScrolled" : "navbar"}`
      }
    >
      <div className="navbar-container">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => {
            closeMobileMenu("home");
          }}
        >
          <LocalTaxiIcon /> Lefkoşa Taksi
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => {
                closeMobileMenu("home");
              }}
            >
              Ana sayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              onClick={() => {
                closeMobileMenu("about");
              }}
            >
              Hakkımız
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-links"
              onClick={() => {
                closeMobileMenu("service");
              }}
            >
              Servisler
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
