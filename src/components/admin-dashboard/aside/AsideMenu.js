import React from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";
import { useAuthContext } from "../../auth/auth-context/AuthContext";
import { Toast } from "../../styled-components/Toast";

export default function AsideMenu() {
  const context = useAuthContext()
  const { signout } = context

  const logOut = async () => {
    await signout()
    Toast.fire({
      icon: "info",
      title: "You are Logged Out",
    });
  }
  return (
    <div className="aside-menu">
      <div className="nav-links">
        <NavLink exact to='/dashboard' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-home"></i>
          </span>
          Home
        </NavLink>
      </div>
      <div className="aside-menu-title">MANAGE USERS</div>
      <div className="nav-links">
        <NavLink to='/dashboard/user-profile' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-user-alt"></i>
          </span>
          User Profile
        </NavLink>
        <NavLink to='/dashboard/users' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-user-alt"></i>
          </span>
          View Users
        </NavLink>
        <NavLink to='/dashboard/api-keys' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-key"></i>
          </span>
          Api Keys
        </NavLink>
      </div>
      <div className="aside-menu-title">MANAGE ARTISANS</div>
      <div className="nav-links">
        <NavLink to='/dashboard/artisans' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-credit-card"></i>
          </span>
          View Artisans
        </NavLink>
        <NavLink to='/dashboard/top-up' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-piggy-bank"></i>
          </span>
          Top Up
        </NavLink>
        <NavLink to='/dashboard/balance' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-coins"></i>
          </span>
          Balance
        </NavLink>
      </div>
      <div className="aside-menu-title">MANAGE APPOINTMENTS</div>
      <div className="nav-links">
        <NavLink to='/dashboard/payment-history' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-credit-card"></i>
          </span>
          Payment History
        </NavLink>
        <NavLink to='/dashboard/top-up' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-piggy-bank"></i>
          </span>
          Top Up
        </NavLink>
        <NavLink to='/dashboard/balance' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-coins"></i>
          </span>
          Balance
        </NavLink>
      </div>
      <div className="aside-menu-title">MANAGE CATEGORIES</div>
      <div className="nav-links">
        <NavLink to='/dashboard/categories' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-credit-card"></i>
          </span>
          View Categories
        </NavLink>
        <NavLink to='/dashboard/categories' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-piggy-bank"></i>
          </span>
          Top Up
        </NavLink>
        <NavLink to='/dashboard/balance' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-coins"></i>
          </span>
          Balance
        </NavLink>
      </div>
      <div className="aside-footer">
        <div className="separator"></div>
        <div className="nav-links">
          <NavLink to='/dashboard/settings' activeClassName='aside-active' className="nav-link">
            <span>
              <i className="las la-cog"></i>
            </span>
            Settings
          </NavLink>
        </div>
        <div className="nav-links">
          <li className="nav-link">
            <span>
              <i className="las la-power-off"></i>
            </span>
           Log Out
          </li>
        </div>
      </div>
    </div>
  );
}
