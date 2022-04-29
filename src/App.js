import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// constants
import { HOME_PATH, DEX_PATH } from "./constants/routes";
// components
import Loader from "./components/loader/Loader";
// pages
const Home = lazy(() => import("./pages/home/Home"));
const Dex = lazy(() => import("./pages/dex/Dex"));
const Error404 = lazy(() => import("./pages/error404/Error404"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader text="Loading..." />}>
        <Switch>
          <Route exact path={HOME_PATH} component={Home} />
          <Route exact path={DEX_PATH} component={Dex} />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
