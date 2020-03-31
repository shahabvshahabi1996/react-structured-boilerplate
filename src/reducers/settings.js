import { SET_LANG, SET_THEME, SET_DIRECTION } from "../constants/types";

const storedTheme = localStorage.getItem("theme");
const storedLang = localStorage.getItem("lang");
const storedDirection = localStorage.getItem("dir");

const INITIAL_STATE = {
  theme: storedTheme ? storedTheme : "light",
  lang: storedLang ? storedLang : "en",
  dir: storedDirection ? storedDirection : "ltr"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: action.payload
      };
    }

    case SET_LANG: {
      return {
        ...state,
        lang: action.payload
      };
    }

    case SET_DIRECTION: {
      return {
        ...state,
        dir: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
