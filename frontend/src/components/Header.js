import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TheContext from "../TheContext";
import actions from "../api";
import Profile from "./Profile";

function Header(props) {
  let [user, setUser] = useState({});

  const getTheUser = async () => {
    let res = await actions.getUser();
    setUser(res.data);
  };

  useEffect(() => {
    getTheUser();
  }, []);

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div>
        <nav className="nav-bar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>PLANT PARTY</h1>
          </Link>
          <img src="./assests/logo.png" alt="" />
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>Home</li>
            </Link>
            {user?.name ? (
              <>
                <Link
                  className="nav-link"
                  to="/Profile"
                  style={{ textDecoration: "none" }}
                >
                  <li>Profile</li>
                </Link>
              </>
            ) : (
              <Link to="/Auth" style={{ textDecoration: "none" }}>
                <li>Log In</li>
              </Link>
            )}

            <Link to="/fourm" style={{ textDecoration: "none" }}>
              <li>Forum</li>
            </Link>
            <Link to="/resources" style={{ textDecoration: "none" }}>
              <li>Resources</li>
            </Link>
            <Link to="/add-plant" style={{ textDecoration: "none" }}>
              <li>Plant Proposals</li>
            </Link>
          </ul>
        </nav>
      </div>
    </TheContext.Provider>
  );
}

export default Header;
