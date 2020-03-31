import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import ThemeProvider from "./components/ThemeProvider";

const lazyHome = React.lazy(() => import("./pages/home"));
const lazyAbout = React.lazy(() => import("./pages/about"));

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<CircularProgress color="secondary" />}>
            <Route exact path="/" component={lazyHome} />
            <Route path="/about" component={lazyAbout} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
