import React, { useState } from "react";
import { connect } from "react-redux";
import { Wrapper } from "../../components/Wrapper/wrapper";
import classes from "./layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false),
    sideDrawerClosedHandler = () => setShowSideDrawer(false),
    sideDrawerToggleHandler = () => setShowSideDrawer(!showSideDrawer);

  return (
    <Wrapper>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={showSideDrawer}
        closed={sideDrawerClosedHandler}
      />
      <main className={classes.Content}>{props.children}</main>
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);
