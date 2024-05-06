import React, { useState } from "react";
import { themeContext } from "../../Context";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({ darkMode: false });

  return (
    <themeContext.Provider value={{ state: theme, setState: setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
