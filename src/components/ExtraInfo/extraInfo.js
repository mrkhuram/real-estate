import React from 'react';
import {

    Row,
    Col,
    Container
} from 'reactstrap';
import img1 from '../assets/images/featured-properties-1.jpg'

class ExtraInfo extends React.Component {

    render() {

        return (
            <div
                className='extra-info-wrapper index section-padding'
            >
            <Container>

                <Row>



                    <Col sm='12' xs='12' md='12'>
                        <div class="extra-info">
                            <figure class="extra-info-image pull-right">
                                <img src={require('../assets/images/extra-info.jpg')} alt="" />
                                {/* <div class="overlay-1"></div> */}
                            </figure>
                            <div class="extra-info-text margin-control">
                                <h3>
                                    <a href="#" className='explore-by'>Explore by Neighbourhood</a>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled.</p>
                                <a href="#" class="btn-1 flat-btn">
                                    <span>search home</span>
                                </a>
                            </div>
                        </div>
                    </Col>


                    <Col sm='12' xs='12' md='12'>

                        <div class="extra-info">
                            <figure class="extra-info-image">
                                <img src={require('../assets/images/extra-info.jpg')} alt="" />

                                {/* <div class="overlay-1"></div> */}
                            </figure>
                            <div class="extra-info-text">
                                <h3>
                                    <a href="#" className='explore-by'>Search smarter, from anywhere</a>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standar dummy text ever since the 1500s, when an unknown printer took a galley of type scrambled.</p>
                                <a href="#" class="btn-1 flat-btn">
                                    <span>find an agent</span>
                                </a>
                            </div>
                        </div>
                    </Col>



                    <Col sm='12' xs='12' md='12'>

                        <div class="extra-info margin-none">
                            <figure class="extra-info-image pull-right">
                                <img src={require('../assets/images/extra-info.jpg')} alt="" />

                                {/* <div class="overlay-1"></div> */}
                            </figure>
                            <div class="extra-info-text margin-control">
                                <h3>
                                    <a href="#" className='explore-by'  >Partner with trusted talent</a>
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and type setting industry. Lorem Ipsum has been the
                                    industry's standar dummy text ever since the 1500s,
                                when an unknown printer took a galley of type scrambled.</p>
                                <a href="#" class="btn-1 flat-btn">
                                    <span>search home</span>
                                </a>
                            </div>
                        </div>
                    </Col>


                </Row>
            </Container>
            </div>
        );
    };
}

export default ExtraInfo;