import React from 'react';
import {

  Row,
  Col,
  Container
} from 'reactstrap';
// import Container from '@material-ui/core/Container';

import { faFacebookF,faYoutube,faTwitter, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class QuickLinks extends React.Component {

  addClass = () => {


  }
  render() {

    return (
      <footer>

        <Container>


          <div class="footer-wrapper section-padding">
            <Row>


              <Col xs='6' sm='3' md='3'>

                <a href="#" class="footerLogo">
                  <img src={require("../assets/images/logo.png")} alt="" />
                </a>
                <p className='footerText'>190 Fifth Avenue, 3rd Floor Essex, London 10011, UK 012.822.9058
                            </p>
                <ul class="social-icons text-center">
                  <li class="facebook">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className='i'/></a>
                  </li>
                  <li class="twitter">
                    <a href="#"><FontAwesomeIcon icon={faTwitter} className='i'/></a>
                  </li>
                  <li class="linkedin">
                    <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className='i'/></a>
                  </li>
                  <li class="youtube">
                    <a href="#"><FontAwesomeIcon icon={faYoutube} className='i'/></a>
                  </li>
                </ul>
              </Col>
              <Col xs='6' sm='3' md='3'>

                <h6>company</h6>
                <ul class="company-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Investors</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Offices</a></li>
                </ul>

              </Col>
              <Col xs='6' sm='3' md='3'>
                <h6>information</h6>
                <ul class="info-links">
                  <li><a href="#">FAQ’s</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Copyright Issues</a></li>
                </ul>
              </Col>

              <Col xs='6' sm='3' md='3'>
                <h6>subscribe newsletter</h6>
                <p>Subscribe to our newsletter to get all new offers, discounts and news.</p>
                <input type="Email" name="name" placeholder="Email Address" 
                className='emailInput'
                />

                <button class="btn-1 flat-btn SubscribeButton">
                  <span >Subscribe now</span>
                </button>
              </Col>

            </Row>
          </div>
          <p class="copyright text-center">© Copyright ModernHaus. All Rights Reserved. - 2018</p>


        </Container>
      </footer>
    );
  };
}

export default QuickLinks;