import React from "react";
import { connect } from "react-redux";
import AppLocales from "../../lang/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import { IntlProvider } from "react-intl";
import LightTheme from "../../themes/light";
import DarkTheme from "../../themes/dark";

const ThemeProvider = ({ children, settings }) => {
  const theme = createMuiTheme(
    settings.theme === "light" ? LightTheme : DarkTheme
  );

  document.querySelector("body").setAttribute("dir", settings.dir);
  theme.direction = settings.dir;

  if (settings.dir === "rtl") {
    const rtlJssStyles = create({ plugins: [...jssPreset().plugins, rtl()] });
    return (
      <StylesProvider jss={rtlJssStyles}>
        <MuiThemeProvider theme={theme}>
          <IntlProvider
            locale={AppLocales[settings.lang].locale}
            messages={AppLocales[settings.lang].messages}
          >
            {children}
          </IntlProvider>
        </MuiThemeProvider>
      </StylesProvider>
    );
  }

  return (
    <MuiThemeProvider theme={theme}>
      <IntlProvider
        locale={AppLocales[settings.lang].locale}
        messages={AppLocales[settings.lang].messages}
      >
        {children}
      </IntlProvider>
    </MuiThemeProvider>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default connect(mapStateToProps, {})(ThemeProvider);
