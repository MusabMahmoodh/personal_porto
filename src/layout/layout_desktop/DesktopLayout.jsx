import React from "react";

const DesktopLayout = ({ children }) => {
  const [colorTheme, setColorTheme] = [
    {
      background_color: "",
      font_color: "",
    },
  ];
  return (
    <div>
      Desktop Layout
      {children}
    </div>
  );
};

export default DesktopLayout;
