"use client";
import Link from "next/link";
import { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <>
      <div style={{height:"57px"}}>
        <Navbar
          expand="lg"
          fixed="top"
          style={{ width: "100%" }}
          className="bg-white header-top"
        >
          <Container>
            <Navbar.Brand className="logo-img" href="/">
              <img
                src="https://citigym.com.vn/themes/citigym/images/logo.png"
                alt="Citigym"
              />
            </Navbar.Brand>
            <Navbar.Toggle onClick={toggleDrawer} />
            <Offcanvas
              show={showDrawer}
              onHide={() => setShowDrawer(false)}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <Link href={"/"}>
                    <img
                      src="https://citigym.com.vn/themes/citigym/images/logo.png"
                      alt="Citigym"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 header-body ">
                  <Link href={"/clb"}>CLB</Link>
                  <Link href={"/dich-vu"}>DỊCH VỤ</Link>
                  <Link href={"/chinh-sach-gia"}>CHÍNH SÁCH GIÁ</Link>
                  <Link href={"/tin-tuc"}>TIN TỨC</Link>
                  <Link href={"/"}>KHUYẾN MÃI</Link>
                  <Link className="btn btn-brand" href={"/#"}>
                    ĐĂNG KÍ TẬP THỬ
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
            <Navbar.Collapse
              id="responsive-navbar-nav"
              className="d-none d-lg-block"
            >
              <Nav className="me-auto">{/* Các phần tử con của Nav */}</Nav>
              <Nav className="header-bot">
                <Link href={"/clb"}>CLB</Link>
                <Link href={"/dich-vu"}>DỊCH VỤ</Link>
                <Link href={"/chinh-sach-gia"}>CHÍNH SÁCH GIÁ</Link>
                <Link href={"/tin-tuc"}>TIN TỨC</Link>
                <Link href={"/"}>KHUYẾN MÃI</Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className="d-none d-lg-block">
              <Link className="btn btn-brand" href={"/#"}>
                ĐĂNG KÍ TẬP THỬ
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default Header;
