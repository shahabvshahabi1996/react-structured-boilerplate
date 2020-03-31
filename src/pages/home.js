import React from "react";
import Layout from "../components/Layout";
import { Paper, makeStyles, Divider, Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const styles = makeStyles(theme => {
  return {
    root: {
      padding: 10
    }
  };
});

export default () => {
  const classes = styles();

  return (
    <Layout>
      <Paper elevation={3} className={classes.root}>
        <h2>
          <FormattedMessage id="app.title.home" />
        </h2>
        <Divider />
        <h3>
          <FormattedMessage id="app.button.title" />
        </h3>
        <div>
          <Button variant="outlined">
            <FormattedMessage id="app.button" />
          </Button>{" "}
          <Button color="secondary" variant="contained">
            <FormattedMessage id="app.button" />
          </Button>{" "}
          <Button color="secondary" variant="outlined">
            <FormattedMessage id="app.button" />
          </Button>{" "}
        </div>
      </Paper>
    </Layout>
  );
};
