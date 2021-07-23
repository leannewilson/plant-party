import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TheContext from "../TheContext";
import actions from "../api";

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
        <nav className="nav-bar navigation">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">PLANT PARTY</h1>
          </Link>
          <img src="./assests/logo.png" alt="" />
          <div className="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu">
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
              {user?.name ? (
                <>
                  <Link className="nav-link" to="/Profile" className="link">
                    <li>Profile</li>
                  </Link>
                </>
              ) : (
                <Link to="/Auth" className="link">
                  <li>Log In</li>
                </Link>
              )}

              <Link to="/forum" className="link">
                <li>Forum</li>
              </Link>
              <Link to="/resources" className="link">
                <li>Resources</li>
              </Link>
              <Link to="/add-plant" className="link">
                <li>Plant Proposals</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </TheContext.Provider>
  );
}

export default Header;
