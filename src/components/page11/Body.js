import React from 'react';
import {
  Row,
  Col
} from "reactstrap";
import { Container } from '@material-ui/core'
import Slider from './slider'
import BottomSlider from './bottomSlider'

import { faSearch, faEnvelope, faMapMarker, faMapMarkerAlt, faPhoneAlt, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Body11 extends React.Component {

  papularNews = [
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
    {
      img: require("../assets/images/property-list-view-agent.jpg"),
      title: "3 bedroom property sale",
      small: 'Moore Lane, London, EC2Y',
      price: '£13,500,000'
    },
  ]
  nearbyList = ["East Lothian", 'Scottish Borders', 'Dumfries and Galloway', 'Cumbria', 'North Yorkshire', 'County Durham', 'Tyne and Wear', 'More Locations']


  floorMap = [
    {
      img: require("../assets/images/floor-map.jpg"),

    },
    {
      img: require("../assets/images/floor-map.jpg"),

    },
    {
      img: require("../assets/images/floor-map.jpg"),

    },
    {
      img: require("../assets/images/floor-map.jpg"),

    },


  ]

  propertyDetail = [
    {
      r1: 'Type of Property',
      r2: 'House'
    },
    {
      r1: 'Status',
      r2: 'Sale'
    },
    {
      r1: 'Built Year',
      r2: '2017'
    },
    {
      r1: 'Listing Date',
      r2: '11 July 2017'
    },
    {
      r1: 'Gardens',
      r2: '1'
    },

  ]
  propertyDetail2 = [
    {
      r1: 'Bedrooms',
      r2: '9'
    },
    {
      r1: 'Bathrooms',
      r2: '3'
    },
    {
      r1: 'Kitchens',
      r2: '2'
    },
    {
      r1: 'Lounges',
      r2: '1'
    },
    {
      r1: 'Parkings',
      r2: '1'
    },

  ]
  render() {

    return (
      <>
        <section class="properties-single p11BodyPadding index">
          <Container>
            <Row>

              <Col xs='12' sm='7' md='8'>
                <div class="property-title">
                  <h2>4 bedroom penthouse for sale
                            <small>Moore Lane, London, EC2Y</small>
                  </h2>
                  <h3>£13,500,000</h3>
                </div>


                <Slider />


                {/* <!-- Property image Slider End -->

                    <!-- Property Details Start --> */}
                <div class="property-detail-wrapper ">
                  <h4 class="property-single-detail-title">Property Details</h4>


                  <ul>
                    {this.propertyDetail.map((item) => {

                      return <li>
                        <div class="title">
                          <p>{item.r1}</p>
                        </div>
                        <div class="title-content">
                          <p>{item.r2}</p>
                        </div>
                      </li>
                    })}

                  </ul>
                  <ul>
                    {this.propertyDetail2.map((item) => {

                      return <li>
                        <div class="title">
                          <p>{item.r1}</p>
                        </div>
                        <div class="title-content">
                          <p>{item.r2}</p>
                        </div>
                      </li>
                    })}

                  </ul>

                </div>
                {/* <!-- Property Details End -->

                    <!-- Property Description Start --> */}
                <div class="property-description-wrapper">
                  <h4 class="property-single-detail-title">Property Description</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ante, consectetur vel congue eu, mollis vel urna. Nam sollicitudin molestie mollis. Donec ut pulvinar dolor. Aliquam mi enim, blandit et bibendum eget, tempus a tortor. Vivamus fringilla ultricies iaculis. Quisque consequat nunc a lacus varius ultricies. Duis eget lectus efficitur, viverra lectus eu, auctor lectus. Donec vulputate magna sed venenatis posuere. Nullam eget odio tempor, bibendum ex in, pharetra lorem. Mauris turpis lorem, pretium in sagittis ut, hendrerit in ante. Vestibulum a neque accumsan, consequat libero sit amet, feugiat neque. Donec justo orci, aliquet id lectus sed, auctor venenatis massa. Morbi ultrices pretium tellus, sit amet lacinia nisi condimentum sit amet. Etiam a ornare velit, sit amet finibus nunc.  In et lectus ultrices, aliquam libero vel, tristique sem. </p>

                  <p>Donec vulputate magna sed venenatis posuere. Nullam eget odio tempor, bibendum ex in, pharetra lorem. Mauris turpis lorem, pretium in sagittis ut, hendrerit in ante. Vestibulum a neque accumsan, consequat libero sit amet, feugiat neque. Donec justo orci, aliquet id lectus sed, auctor venenatis massa. Morbi ultrices pretium tellus, sit amet lacinia nisi condimentum sit amet. Etiam a ornare velit, sit amet finibus nunc.  Donec vulputate magna sed venenatis posuere. Nullam eget odio tempor, bibendum ex in, pharetra lorem. Mauris turpis lorem, pretium in sagittis ut, hendrerit in ante. Vestibulum a neque accumsan, consequat libero sit amet, feugiat neque. Donec justo orci, aliquet id lectus sed, auctor venenatis massa. Morbi ultrices pretium tellus, sit amet lacinia nisi condimentum sit amet. Etiam a ornare velit, sit amet finibus nunc. </p>
                </div>
                {/* <!-- Property Description End -->

                    <!-- Property Amenities Start --> */}
                <div class="property-amenities-wrapper">
                  <h4 class="property-single-detail-title">Property Amenities</h4>
                  <div class="row">
                    <Col xs='6' sm='6' md='6'>
                      <ul>
                        <li>Air Conditioning</li>
                        <li>Built-In Wardrobes</li>
                        <li>Clinic</li>
                        <li>Dishwasher</li>
                        <li>Fencing</li>
                      </ul>
                    </Col>
                    <Col xs='6' sm='6' md='6'>
                      <ul>
                        <li>Floor Coverings</li>
                        <li>Internet</li>
                        <li>Park</li>
                        <li>School</li>
                        <li>Supermarket/Store</li>
                      </ul>
                    </Col>
                  </div>
                </div>
                {/* <!-- Property Amenities End -->

                    <!-- Floor Map Start --> */}
                <div class="floor-map-wrapper index">
                  <h4 class="property-single-detail-title">Floor Plans</h4>
                  <div class="row">



                    {
                      this.floorMap.map((item) => {

                        return <Col xs='3' sm='3' md='3'>

                          <figure>
                            <img src={item.img} alt="" width='100%' />
                            <figcaption class="overlay-1"
                              style={{
                                marginLeft: 15,
                                marginRight: 15,
                                marginBottom: 15,
                              }}
                            >
                              <a href="assets/images/floor-map.jpg" data-lightbox="image-1" data-title="My caption">
                                {/* <i class="fa fa-search-plus"></i> */}
                                <i>

                                  {/* <FontAwesomeIcon icon={faSearchPlus} /> */}
                                </i>
                              </a>
                            </figcaption>
                          </figure>
                        </Col>
                      })
                    }
                  </div>
                </div>
                {/* <!-- Floor Map End -->

                     <!-- Location Start --> */}
                <div class="property-location-wrapper index">
                  <h4 class="property-single-detail-title">Location</h4>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14128.539065591081!2d85.30853412457277!3d27.713125002472!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1518407050977"
                    width="800" height="600" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
                </div>
                {/* <!-- Location End -->

                    <!-- Other Properties Start --> */}


                <BottomSlider />



                {/* <!-- Other Properties End --> */}
              </Col>

              <Col xs='12' sm='5' md='4' className='side-bar'>

                <div class="search-porperties text-left">
                  <h6 class="sidebar-title">Send an Inquiry</h6>
                  <div class="search-box">
                    <input type="text" name="name" placeholder="Full name *" className='inputProperties' />
                    <input type="text" name="name" placeholder="Email address *" className='inputProperties' />
                    <input type="text" name="name" placeholder="Telephone *" className='inputProperties' />
                    <textarea placeholder="Message"></textarea>
                    <button class="btn-1 bg2 inputProperties">
                      <span>
                        <FontAwesomeIcon icon={faSearch} className='searchIconTwo' />
                        start search
                      </span>
                    </button>
                  </div>
                </div>

                <div class="side-bar-agent-detail-wrapper">
                  <h6 class="sidebar-title">Agent Detail</h6>
                  <div class="side-bar-agent-detail">
                    <figure>
                      <img src={require("../assets/images/testimonials-slider.jpg")} alt="" />
                    </figure>
                    <ul class="side-bar-agent">
                      <li>
                        <FontAwesomeIcon icon={faMapMarkerAlt}
                          className='iconAgentSide'
                        />

                        London, UK</li>
                      <li>
                        <FontAwesomeIcon icon={faPhoneAlt}
                          className='iconAgentSide'
                        />

                        +012.822.9058</li>
                      <li><a href="mailto:angela@domain.com">
                        <FontAwesomeIcon icon={faEnvelope}
                          className='iconAgentSide'
                        />
                        angela@domain.com</a></li>
                    </ul>
                  </div>
                </div>

                <div class="daily-email bg2 text-left">
                  <h4>Get daily property email alerts in your inbox.</h4>
                  <input type="email" name="email" placeholder="Email Address" className='inputProperties' />
                  <button class="btn-1 bg1 inputProperties" ><span>Subscribe now</span></button>
                </div>




                <div class="Categories text-left">
                  <h6 class="sidebar-title">Nearby Places</h6>
                  <ul>
                    {this.nearbyList.map((item) => {

                      return <li><a href="#">{item}</a></li>
                    })}
                  </ul>
                </div>





                <div class="popular-news text-left">
                  <h6 class="sidebar-title">Newly Listed Properties</h6>
                  {
                    this.papularNews.map((item) => {

                      return <div class="news">
                        <figure>
                          <a href="#">
                            <img src={item.img} alt="" />
                          </a>
                        </figure>
                        <div class="popular-news-title">
                          <h6><a href="#">{item.title}</a></h6>
                          <span>{item.small}</span>
                          <span class="price">{item.price}</span>
                        </div>
                      </div>

                    }
                    )
                  }


                  <div class="news">
                    <a href="#" class="link">View all properties <i class="fa fa-angle-right"></i></a>
                  </div>
                </div>




              </Col>
            </Row>
          </Container>



          <section class="subscribe-wrapper bg3 reveal index">
            <Container>

              <Row>
                <Col xs='12' sm='12' md={{ size: 10, offset: 1 }}>
                  <p>Get latest updates in your inbox</p>
                  <div class="subscribe">
                    <input type="text" name="email" placeholder='Email Address' className='inputProperties' />
                    <button class="btn-1 bg2 font1 inputProperties"><span>subscribe now !</span></button>
                  </div>

                </Col>
              </Row>
            </Container>
          </section>





        </section>
      </>
    );
  }
}

export default Body11