import React, { useState } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, useHistory } from "react-router-dom";
import SignedOutMenu from "./SignedOutMenu";
import SignedInMenu from "./SignedInMenu.js";

const NavBar = ({ setFormOpen }) => {
  const history = useHistory();
  const [auth, setAuth] = useState(false);

  const handelSignOut = () => {
    setAuth(false);
    history.push("/");
  };
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} exact to="/" header>
          <img src="/assets/logo.svg" alt="logo" style={{ marginRight: 15 }} />
          Re-vents
        </Menu.Item>
        <Menu.Item as={NavLink} to="/events" name="Events" />
        {auth && (
          <Menu.Item as={NavLink} to="/createEvent">
            <Button positive inverted content="Create Event" />
          </Menu.Item>
        )}
        {auth ? (
          <SignedInMenu signOut={handelSignOut} />
        ) : (
          <SignedOutMenu setAuth={setAuth} />
        )}
      </Container>
    </Menu>
  );
};

export default NavBar;
