import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Container from "../../ui/Container";
import badge1 from "../../../assets/Badge.png"
import badge2 from "../../../assets/Badge-1.png"
import badge3 from "../../../assets/Badge-2.png"
import badge4 from "../../../assets/Badge-3.png"
import badge5 from "../../../assets/Badge-4.png"

export default function App() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted">
      <Container>
      <section className="border-bottom">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="4" className="mx-auto mb-4">
              <h2 className="text-uppercase fw-bold mb-4 text-black">SHOP.CO</h2>
              <p>
                We have clothes that suits your style and which you’re proud to
                wear.<br/>
                From women to men.
              </p>
              <div className="text-black">
                <a href="/" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" size='lg'/>
                </a>
                <a href="/" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" size='lg' />
                </a>
                <a href="/" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" size='lg'/>
                </a>
                <a href="/" className="me-4 text-reset">
                  <MDBIcon fab icon="github" size='lg'/>
                </a>
              </div>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">Company</h6>
              <p>
                <a href="#!" className="text-reset">
                  About
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Works
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Career
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">Help</h6>
              <p>
                <a href="#!" className="text-reset">
                  Customer Support
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Delivery Details
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">FAQ</h6>
              <p>
                <a href="#!" className="text-reset">
                  Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Manage Deliveries
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Payments
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="2" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 text-black">RESOURCES</h6>
              <p>
                <a href="#!" className="text-reset">
                  Free eBooks
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Development Tutorial
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  How to - Blog
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Youtube Playlist
                </a>
              </p>
            </MDBCol>
          </MDBRow>
      </section>

      <section className="d-flex justify-content-center justify-content-lg-between py-4 ">
        <div className="me-5 d-none d-lg-block">
          <span>Shop.co © 2000-2023, All Rights Reserved</span>
        </div>
        <div>
          <a href="/" className="me-1 text-reset">
            <img src={badge1} alt="badge1" width={50}/>
          </a>
          <a href="/" className="me-1 text-reset">
          <img src={badge2} alt="badge1" width={50}/>
          </a>
          <a href="/" className="me-1 text-reset">
          <img src={badge3} alt="badge1" width={50}/>
          </a>
          <a href="/" className="me-1 text-reset">
          <img src={badge4} alt="badge1" width={50}/>
          </a>
          <a href="/" className="me-1 text-reset">
          <img src={badge5} alt="badge1" width={50}/>
          </a>
        </div>
      </section>
      </Container>
    </MDBFooter>
  );
}
