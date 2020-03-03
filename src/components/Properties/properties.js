import React from 'react';
import {

    Row,
    Col,
    Container
} from 'reactstrap';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Properties extends React.Component {

    render() {

        return (
            <div
                className="properties-news-wrapper index section-padding text-center"
            >
                <Container>

                    <Row >
                        <Col xs='12' sm='12' md='10'
                            md={{ size: 10, offset: 1 }}

                            style={{ textAlign: 'center' }}
                        >


                            <h2 className='featuredHeading'>
                                Properties News
                            </h2>
                            <span
                                className='featuredLine'
                            >--------</span>




                            <div class="dis-title">
                                <p>No one knows our cities as well as we do. Browse our comprehensive neighborhood guides to learn about the most desirable or most up-and-coming places to live across the country.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs='4' sm='4' md='4' >
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h4><a href="#"
                                className="PropertiesHeading"
                                >First-time buyers by foreign investors in London</a></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            <a href="#" class="link">Read more <FontAwesomeIcon icon={faAngleRight} className='i'/></a>
                            </div>
                        </Col>
                        <Col xs='4' sm='4' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h4><a 
                                className="PropertiesHeading"
                                
                                href="#">Buyers pushed out by foreign investors in London</a></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            <a href="#" class="link">Read more <FontAwesomeIcon icon={faAngleRight} className='i'/></a>
                            </div>
                        </Col>
                        <Col xs='4' sm='4' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h4><a href="#"
                                className="PropertiesHeading"
                                
                                >First-time buyers pushed lorem dummy in London</a></h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                            <a href="#" class="link">Read more       <FontAwesomeIcon icon={faAngleRight} className='i'/>
                            </a>
                            </div>
                        </Col>
                        
                       
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Properties;