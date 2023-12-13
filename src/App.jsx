import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./assets/components/Home";
import Login from "./assets/components/Home";
import { Provider } from "react-redux";
import store from "./assets/components/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
