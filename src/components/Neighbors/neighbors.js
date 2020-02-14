import React from 'react';
import {

    Row,
    Col,
    Container
} from 'reactstrap';
import img1 from '../assets/images/featured-properties-1.jpg'

class Neighbors extends React.Component {

    render() {

        return (
            <div
                className="explore-wrapper index section-padding text-center"
            >
                <Container>

                    <Row class="row">
                        <Col xs='12' sm='12' md='10' 
                        md={{size: 10, offset: 1 }}

                            style={{ textAlign: 'center' }}
                        >


                            <h2 className='featuredHeading'>
                            Explore Our Neighborhoods
                            </h2>
                            <span
                                className='featuredLine'
                            >--------</span>




                            <div class="dis-title">
                                <p>No one knows our cities as well as we do. Browse our comprehensive neighborhood guides to learn about the most desirable or most up-and-coming places to live across the country.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row class="row">
                        <Col xs='6' sm='6' md='4' >
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5><a href="#">Murray Hill</a></h5>
                                <a href="" className='anchor'>London, United Kingdom</a>
                            </div>
                        </Col>
                        <Col xs='6' sm='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5>
                                    <a href="#">Ramsey Avenue</a>
                                </h5>
                                <a href="" className='anchor'>Bristol</a>
                            </div>
                        </Col>
                        <Col xs='6' sm='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5><a href="#">Cotham Road</a></h5>
                                <a href="" className='anchor'>Cotham</a>
                            </div>
                        </Col>
                        <Col xs='6' sm='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5><a href="#">Kentish Town</a></h5>
                                <a href="" className='anchor'>Kent</a>
                            </div>
                        </Col>
                        <Col xs='6' sm='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5><a href="#">Baythorne End</a></h5>
                                <a href="" className='anchor'>Essex</a>
                            </div>
                        </Col>
                        <Col xs='6' sm='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                                    </a>
                                    <div class="overlay-1"></div>
                                </figure>
                                <h5><a href="#">Spats Lane</a></h5>
                                <a href="" className='anchor'>Hampshire</a>
                            </div>
                        </Col>
                        <a href="#" class="btn-1 text-uppercase">
                            <span>explore all neighborhoods</span>
                        </a>
                    </Row>
                </Container>
            </div>
        );
    };
}

export default Neighbors;