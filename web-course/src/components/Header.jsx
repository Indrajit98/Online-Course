import React, { useState } from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [bg ,setBg] = useState({
    color:'black',
    backgroundColor:'white'
  })
  const [day,night] = useState(false)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((err) => console.error(err));
  };

  const mode = () =>{
    if(bg.backgroundColor === '#cfd8dc'){
      setBg({
        backgroundColor:'white'
      })
      night(false)
      // console.log('yes');
    }
    else{
      setBg({
        color:'black',
        backgroundColor:'#cfd8dc'
      })
      night(true)
      // console.log('no')
    }


  }

  return (
    <div style={bg}>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container className="d-flex align-content-center py-2">
          <Navbar.Brand>
            <Link className="text-decoration-none fs-lg-2" to="/">Online Course</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="px-3 text-decoration-none" to="/">
                Course
              </Link>
              <Link className="px-3 text-decoration-none" to="/faq">
                FAQ
              </Link>
              <Link className="px-3 text-decoration-none" to="/blog">
                Blog
              </Link>

              <>
                {user?.uid ? (
                  <>
                    <span className="px-3 text-decoration-none">{user?.displayName}</span>
                    <Link>
                      {user?.photoURL ? (
                        <Image
                          style={{ hight: "2rem", width: "2rem" }}
                          roundedCircle
                          src={user?.photoURL}
                        ></Image>
                      ) : (
                        <FaUserAlt></FaUserAlt>
                      )}
                    </Link>
                    <div>
                    <Button className="ms-3 py-0 my-lg-0 my-3 logout-button" onClick={handleLogOut} variant="outline-dark">
                      LogOut
                    </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link className="px-3" to="/login">
                      Login
                    </Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </>
            </Nav>
            <IconButton onClick={mode}> { day ? <Brightness4Icon></Brightness4Icon> : <Brightness7Icon></Brightness7Icon>  }</IconButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
