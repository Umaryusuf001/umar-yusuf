import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{<Write />}</Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
