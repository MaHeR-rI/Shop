import React, { useState } from "react";
import Container from "../../ui/Container";
import classes from "./Navbar.module.css";
import brand from "../../../assets/SHOP.CO.png";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Container>
      <MDBNavbar expand="lg" className="shadow-0">
        <MDBContainer fluid className="p-0">
          <MDBNavbarBrand href="/shop" className={classes.brand}>
            <img src={brand} alt="SHOP.CO" />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 gap-3">
              <MDBNavbarItem className="text-black ms-3 ">
                <MDBDropdown>
                  <MDBDropdownToggle
                    tag="a"
                    className="nav-link text-black"
                    role="button"
                  >
                    shop
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/shop/shopping/On Sale" className="text-black">
                  On sale
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/shop/shopping/New Arrivals" className="text-black">
                  News Arrivals
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/shop/Brands" className="text-black">
                  Brands
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <div
            className={`${classes.form} ${isHovered ? classes.hovered : ""}`}
          >
            <form className={`d-flex input-group w-auto`}>
              <MDBBtn className={classes.search}>
                <MDBIcon fas icon="search" size='lg'/>
              </MDBBtn>
              <input
                type="text"
                onFocus={() => {
                  setIsHovered(true);
                }}
                onBlur={() => {
                  setIsHovered(false);
                }}
                className={`${classes.input} form-control`}
                placeholder="Search for products..."
                aria-label="Search"
              />
            </form>
          </div>
          <div className="text-black ms-3 d-flex flex-row gap-3">
            <a href="/" className="text-black">
              <MDBIcon size='lg' fas icon="shopping-cart" />
            </a>

            <a href="/" className="text-black">
              <MDBIcon size='lg' far icon="user-circle" />
            </a>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </Container>
  );
};
export default Navbar;
