import { SET_LANG, SET_THEME, SET_DIRECTION } from "../constants/types";

export const changeLang = lang => {
  localStorage.setItem("lang", lang);
  return dispatch => {
    dispatch({ type: SET_LANG, payload: lang });
  };
};

export const toggleTheme = theme => {
  let newTheme;

  if (theme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }

  localStorage.setItem("theme", newTheme);
  return dispatch => {
    dispatch({ type: SET_THEME, payload: newTheme });
  };
};

export const toggleRTL = direction => {
  // Direction : rtl | ltr;
  localStorage.setItem("dir", direction);
  return dispatch => {
    dispatch({ type: SET_DIRECTION, payload: direction });
  };
};
