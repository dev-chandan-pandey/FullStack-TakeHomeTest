import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
function Header() {
  const nav__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
         {/*  logo end */}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink className={navClass=>navClass.isActive?"active__link":""} to={item.path}> {item.display}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
                  {/*  menu end */}
                 <div className="nav-right d-flex align-align-items-center g-4">
                  <div className="nav__btns d-flex align-items-center g-4">
                    <Button className="btn secondary__btn"><Link to="/login">login</Link></Button>
                    <Button className="btn primary__btn"><Link to="/register">register</Link></Button>
                  </div>
                  <span className="mobile__menu">
                  <i className="ri-menu-line"></i>
                  </span>
                 </div>
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
