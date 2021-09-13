import React from "react";
import "./App.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "antd/dist/antd.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import { AuthProvider } from "./components/auth/auth-context/AuthContext";
import Signin from "./components/auth/Signin";
import Login from "./components/auth/Login";
import DashBoard from "./components/admin-dashboard/DashBoard";
import ProfileCard from "./components/admin-dashboard/main/main-component/artisans/Profile";



function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/sign-in" component={Signin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/profile-card" component={ProfileCard} />
            {/* <Route path="/signup" component={AuthPage} />
            <Route path="/signin" component={Signin} /> */}
            <Route path="/dashboard" component={DashBoard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
