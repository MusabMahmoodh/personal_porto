import React from "react";
import DesktopTaskBar from "./components/desktop_taskbar/DesktopTaskBar";
import "./DesktopLayout.css";
const DesktopLayout = ({ children }) => {
  const [colorTheme, setColorTheme] = [
    {
      background_color: "",
      font_color: "",
    },
  ];
  return (
    <div className="desktop__layout">
      <div className="desktop__layout__content">{children}</div>
      <div className="desktop__layout__bottom">
        <DesktopTaskBar />
      </div>
    </div>
  );
};

export default DesktopLayout;
