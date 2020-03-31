import React from "react";
import Layout from "../components/Layout";
import { Paper, makeStyles } from "@material-ui/core";
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
          <FormattedMessage id="app.title.about" />
        </h2>
      </Paper>
    </Layout>
  );
};
