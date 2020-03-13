import React, {Fragment, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import EnglishVersion from "./EnglishVersion";
import ChineseVersion from "./ChineseVersion";
import SwipeableViews from 'react-swipeable-views';

const MyProfile = props => {
  const [index, setIndex] = useState(0);
  const handleChange = (value) => {
    setIndex(value);
  };
  return (
    <Fragment>
      <Navbar style={{opacity: 0.5}} bg="light" expand="sm">
        <Navbar.Brand href="#home">My Bilingual Profile</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={index === 0 ? 'active' : ''} onClick={() => handleChange(0)}>English</Nav.Link>
            <Nav.Link className={index === 1 ? 'active' : ''} onClick={() => handleChange(1)}>中文</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <SwipeableViews index={index}>
        <EnglishVersion/>
        <ChineseVersion/>
      </SwipeableViews>
    </Fragment>
  )
};

export default MyProfile;