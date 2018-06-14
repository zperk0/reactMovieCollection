import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { browserHistory } from "../../utils/routes";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserDropdown: null,
      username: "",
      navigationLinks: []
    };
  }

  componentWillMount() {
    this.setNavLinks(this.props.menuItems);
  }

  componentWillReceiveProps(nextProps) {
    this.setNavLinks(nextProps.menuItems);
  }

  setNavLinks(navigationLinks) {
    let path = browserHistory.location.pathname;
    let navigationArr = [];
    let navigationJSX = [];
    for (let menuName in navigationLinks) {
      let menuObject = navigationLinks[menuName];
      if (menuObject.hasOwnProperty("href")) {
        let paramsArray = menuObject.href.match(/[:]\w+/g);
        if (path === menuObject.href) {
          menuObject.isActive = true;
        } else {
          if (typeof paramsArray === undefined) {
            if (menuObject.href.includes(path)) {
              menuObject.isActive = true;
            }
          } else {
            menuObject.isActive = false;
          }
        }
        menuObject.name = menuName;
        navigationArr.push(menuObject);
      }
    }
    navigationArr.map((menuItems, i) => {
      if (menuItems["navbarItem"]) {
        if (menuItems.isActive === true) {
          navigationJSX.push(
            <li
              role="presentation"
              className="active"
              key={i + "_navItem"}
              href="#"
            >
              <Link key={i} to={menuItems.href}>
                {menuItems.name}
              </Link>
            </li>
          );
        } else {
          navigationJSX.push(
            <li role="presentation" key={i + "_navItem"} href="#">
              <Link key={i} to={menuItems.href}>
                {menuItems.name}
              </Link>
            </li>
          );
        }
      }
      return;
    });
    this.setState({ navigationLinks: navigationJSX });
  }

  render() {
    return (
      <div>
        <Navbar fixedTop fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a target="_blank" className="navbar-brand">
                <img
                  className="navbar-logo"
                  id={this.props.logoIDName}
                  src={this.props.logoImgPath}
                  alt="#"
                />
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav navbar-nav">
              {this.state.navigationLinks}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
