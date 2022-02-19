import React, { useCallback, useEffect } from "react";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useData } from "./context/userData";
import Home from "./pages/home";
import AppPanel from "./components/app";
import Auth from "./components/auth";
import "./App.css";

const history = createBrowserHistory();

function App() {
  const { state, dispatch } = useData();

  const handleNewMessage = useCallback(
    (event) => {
      if (event?.detail && event.detail.action === "auth") {
        dispatch({
          type: "auth",
          data: event.detail.value,
        });
        history.push("/app");
      }
    },
    [dispatch]
  );

  useEffect(() => {
    window.addEventListener("message", handleNewMessage);

    return () => {
      window.removeEventListener("message", handleNewMessage);
    };
  }, [handleNewMessage]);

  return (
    <Router history={history}>
      <div className="App">
        <header className="header">
          <ul className="list">
            <li>
              <Link to="/auth">Auth React</Link>
            </li>
            <li>
              <Link to="/app">App vue</Link>
            </li>
          </ul>
          {state?.auth?.username && (
            <div>Username is: {state?.auth?.username}</div>
          )}
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app" component={AppPanel} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
