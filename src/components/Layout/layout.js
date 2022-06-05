import Sidebar from "../Sidebar/sidebar";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useCallback } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const getCurrentTheme = () => {
  let theme;
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  } else {
    theme = window.matchMedia("(prefers-color-scheme : dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
};

const Layout = () => {
  const btnRef = useRef();
  const root = document.querySelector(":root");

  const loadTheme = useCallback(
    (theme) => {
      if (theme === "dark") {
        // btnRef.current.innerHTML = "dark";
        root.classList.add("dark");
        root.classList.remove("light");
      } else {
        // btnRef.current.innerHTML = "light";
        root.classList.add("light");
        root.classList.remove("dark");
      }
    },
    [root]
  );

  const handleClick = () => {
    let theme = getCurrentTheme();

    if (theme === "dark") {
      theme = "light";
      localStorage.setItem("theme", "light");
    } else {
      theme = "dark";
      localStorage.setItem("theme", "dark");
    }
    loadTheme(theme);
  };

  useEffect(() => {
    loadTheme(getCurrentTheme());
  }, [loadTheme]);

  return (
    <div className="layout">
      <Sidebar />
      <div className="container">
        <div className="top">
          <h3>&lt;html&gt;</h3>
          <h3 className="body">&lt;body&gt;</h3>
        </div>

        <div className="content">
          <Outlet />
        </div>

        <div className="bottom">
          <h3 className="body">&lt;/body&gt;</h3>
          <h3>&lt;/html&gt;</h3>
        </div>
      </div>
      <div className="toggle-btn" ref={btnRef} onClick={handleClick}>
        <BiSun className="sun" />
        <BiMoon className="moon" />
      </div>
    </div>
  );
};

export default Layout;
