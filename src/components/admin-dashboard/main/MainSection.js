import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./main-component/home/Home";
import Users from "./main-component/users/Users";
import Artisans from "./main-component/artisans/Artisans";
import UserProfile from "./main-component/user-profile/UserProfile";
import Categories from "./main-component/categories/Categories";

export default function MainSection() {
  return (
    
    <div className="main-section">
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route  path="/dashboard/user-profile" component={UserProfile} />
        <Route  path="/dashboard/users" component={Users} />
        <Route  path="/dashboard/artisans" component={Artisans} />
        <Route  path="/dashboard/categories" component={Categories} />
      </Switch>
    </div>
    
  );
}
