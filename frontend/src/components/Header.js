import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import TheContext from "../TheContext";
import actions from "../api";

function Header(props) {
  let { user, setUser } = useContext(TheContext);
  const ref = useRef();

  // TO DO
  const getTheUser = async () => {
    try {
      console.log("actions.getUser()", await actions.getUser());
      if (actions.getUser() === undefined) {
        //TO DO - log in the user? ask the user to log in?
        let res = await actions.getUser();
        setUser(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTheUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TheContext.Provider value={{ user, setUser, getTheUser }}>
      <div>
        <nav className="nav-bar navigation">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="logo">PLANT PARTY</h1>
          </Link>

          <div className="menuToggle">
            <input className="input-hidden" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul className="menu" ref={ref}>
              <Link to="/" className="link">
                <li>Home</li>
              </Link>
              {user?.name ? (
                <>
                  <Link className="nav-link link" to="/Profile">
                    <li>Plantry</li>
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
              {user?.admin === true ? (
                <Link to="/add-plant" className="link">
                  <li>Add Plant</li>
                </Link>
              ) : (
                <Link to="/plant-suggestion" className="link">
                  <li>Plant Proposals</li>
                </Link>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </TheContext.Provider>
  );
}

export default Header;
