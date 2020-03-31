import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import styles from "./styles";
import { connect } from "react-redux";
import { toggleTheme, changeLang, toggleRTL } from "../../actions/settings";
import { withRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";

const Navbar = ({ settings, toggleTheme, changeLang, history, toggleRTL }) => {
  const classes = styles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLang = lang => {
    if (lang === "fr") {
      toggleRTL("rtl");
    } else {
      toggleRTL("ltr");
    }

    changeLang(lang);
    setAnchorEl(null);
  };

  const handleChangeRoute = route => {
    return history.push(route);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleTheme(settings.theme)}
          >
            {settings.theme === "light" ? (
              <Brightness7Icon />
            ) : (
              <Brightness2Icon />
            )}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <FormattedMessage id="app.brand" />
          </Typography>

          <Button onClick={() => handleChangeRoute("/")}>
            <FormattedMessage id="app.title.home" />
          </Button>
          <Button onClick={() => handleChangeRoute("/about")}>
            <FormattedMessage id="app.title.about" />
          </Button>

          {/** DropDown */}
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            variant="outlined"
            onClick={handleClick}
          >
            <FormattedMessage id="app.change.langueage" />
          </Button>
          <Menu
            classes={{ list: classes.list }}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleChangeLang("en")}>
              <FormattedMessage id="app.language.english" />
            </MenuItem>
            <MenuItem onClick={() => handleChangeLang("fr")}>
              <FormattedMessage id="app.language.persian" />
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    settings: state.settings
  };
};

export default withRouter(
  connect(mapStateToProps, { toggleTheme, changeLang, toggleRTL })(Navbar)
);
