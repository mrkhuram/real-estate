import React from 'react'
import {
    Row, Col
} from 'reactstrap'
import { faSearch, faThLarge, faMap, faEuroSign, faPoundSign, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from '@material-ui/core'

export default class PropertiesList extends React.Component {


    src = require("../assets/images/property-list-view-with-sidebar.jpg")

    properties = [
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
        {
            title: '4 bedroom penthouse for sale',
            small: 'Moore Lane, London, EC2Y',
            price: '1,35,000',
            desc: 'Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.',
            phn: '+012.822.9058',
            srcBig: require("../assets/images/property-list-view-with-sidebar.jpg"),
            srcSmall: require("../assets/images/property-list-view-with-sidebar-agent.jpg"),
            li: ['5 beds','3 baths', '300 sq st','1 parking']
        },
    ]


    render() {
        return (
            <div>



                <section class="property-list-sidebar-wrapper text-center index section-padding">

                    <Container>

                        <Row>


                            <Col xs='12' sm='7' md='8' className='nopad'>

                                <Col xs='12' sm='12' md='12'>
                                    <div class="property-grids-filter">
                                        <ul class="filter">
                                            <li>
                                                <select>
                                                    <option value="Default Sort">Default Sort</option>
                                                    <option value="Default Sort">Default Sort</option>
                                                    <option value="Default Sort">Default Sort</option>
                                                    <option value="Default Sort">Default Sort</option>
                                                </select>
                                            </li>
                                            <li>
                                                <select>
                                                    <option value="18">18</option>
                                                    <option value="17">17</option>
                                                    <option value="15">15</option>
                                                    <option value="21">21</option>
                                                </select>
                                            </li>
                                            <li>28,061 Results</li>
                                        </ul>
                                        <ul class="list-view">
                                            <li>
                                                <a href="06-modernhaus-properties-grid.html">
                                                    <FontAwesomeIcon icon={faThLarge}
                                                        className='faIcon'
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="08-modernhaus-properties-map.html">
                                                    <FontAwesomeIcon icon={faMap}
                                                        className='faIcon'

                                                    />

                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                                {
                                    this.properties.map((item) => {

                                        return <>
                                            <Col xs='12' sm='12' md='12'>
                                                <div class="property-list">
                                                    <Row>

                                                        <Col xs='12' sm='12' md='4'>

                                                            <figure>
                                                                <a href="#">
                                                                    <img src={item.srcBig} alt="" />
                                                                    <span class="overlay-1"></span>
                                                                </a>
                                                                <a href="14-modernhaus-agents-single.html" class="see-agent">
                                                                    <img src={item.srcSmall} alt="" />
                                                                </a>
                                                            </figure>
                                                        </Col>
                                                        <Col xs='12' sm='12' md='8'>

                                                            <div class="property-list-detail text-left">
                                                                <div class="property-title">
                                                                    <h5><a href="#">{item.title}</a><small>{item.small}</small></h5>
                                                                    <h6> <FontAwesomeIcon icon={faPoundSign}
                                                                        className='faIcon'

                                                                    /> {item.price}</h6>
                                                                </div>
                                                                <p>{item.desc}</p>
                                                                <ul>
                                                                {item.li.map((li)=>{
                                                                return <li>{li}</li>

                                                                })}
                                                                </ul>
                                                                <div class="talk-to">
                                                                    <a href="#" class="font1 btn-5 btn-1 text-uppercase">
                                                                        <span>+012.822.9058</span>
                                                                    </a>
                                                                    <a href="#" class="font1 btn-4 btn-1 text-uppercase">
                                                                        <span>Request Details</span>
                                                                    </a>
                                                                </div>
                                                                <a href="#" class="link">view details</a>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </>
                                    })
                                }

                                
                                
                                
                                
                                
                                {/* <Col sm='12' md='12' xs='12'>
                                    <div class="property-list">
                                        <Row>


                                            <Col xs='12' sm='12' md='4'>
                                                <figure>
                                                    <a href="#">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar.jpg")} alt="" />
                                                        <span class="overlay-1"></span>
                                                    </a>
                                                    <a href="14-modernhaus-agents-single.html" class="see-agent">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar-agent.jpg")} alt="" />
                                                    </a>
                                                </figure>
                                            </Col>


                                            <Col xs='12' sm='12' md='8'>
                                                <div class="property-list-detail text-left">
                                                    <div class="property-title">
                                                        <h5><a href="#">4 bedroom penthouse for sale</a><small>Moore Lane, London, EC2Y</small></h5>
                                                        <h6> <FontAwesomeIcon icon={faPoundSign}
                                                            className='faIcon'

                                                        /> 1,35,000</h6>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.</p>
                                                    <ul>
                                                        <li>5 beds</li>
                                                        <li>3 baths</li>
                                                        <li>300 sq st</li>
                                                        <li>1 parking</li>
                                                    </ul>
                                                    <div class="talk-to">
                                                        <a href="#" class="font1 btn-5 btn-1 text-uppercase">
                                                            <span>+012.822.9058</span>
                                                        </a>
                                                        <a href="#" class="font1 btn-4 btn-1 text-uppercase">
                                                            <span>Request Details</span>
                                                        </a>
                                                    </div>
                                                    <a href="#" class="link">view details</a>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </Col>
                                <Col sm='12' md='12' xs='12'>
                                    <div class="property-list">
                                        <Row>


                                            <Col xs='12' sm='12' md='4'>
                                                <figure>
                                                    <a href="#">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar.jpg")} alt="" />
                                                        <span class="overlay-1"></span>
                                                    </a>
                                                    <a href="14-modernhaus-agents-single.html" class="see-agent">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar-agent.jpg")} alt="" />
                                                    </a>
                                                </figure>
                                            </Col>


                                            <Col xs='12' sm='12' md='8'>
                                                <div class="property-list-detail text-left">
                                                    <div class="property-title">
                                                        <h5><a href="#">4 bedroom penthouse for sale</a><small>Moore Lane, London, EC2Y</small></h5>
                                                        <h6> <FontAwesomeIcon icon={faPoundSign}
                                                            className='faIcon'

                                                        /> 1,35,000</h6>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.</p>
                                                    <ul>
                                                        <li>5 beds</li>
                                                        <li>3 baths</li>
                                                        <li>300 sq st</li>
                                                        <li>1 parking</li>
                                                    </ul>
                                                    <div class="talk-to">
                                                        <a href="#" class="font1 btn-5 btn-1 text-uppercase">
                                                            <span>+012.822.9058</span>
                                                        </a>
                                                        <a href="#" class="font1 btn-4 btn-1 text-uppercase">
                                                            <span>Request Details</span>
                                                        </a>
                                                    </div>
                                                    <a href="#" class="link">view details</a>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </Col>
                                <Col sm='12' md='12' xs='12'>
                                    <div class="property-list">
                                        <Row>


                                            <Col xs='12' sm='12' md='4'>
                                                <figure>
                                                    <a href="#">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar.jpg")} alt="" />
                                                        <span class="overlay-1"></span>
                                                    </a>
                                                    <a href="14-modernhaus-agents-single.html" class="see-agent">
                                                        <img src={require("../assets/images/property-list-view-with-sidebar-agent.jpg")} alt="" />
                                                    </a>
                                                </figure>
                                            </Col>


                                            <Col xs='12' sm='12' md='8'>
                                                <div class="property-list-detail text-left">
                                                    <div class="property-title">
                                                        <h5><a href="#">4 bedroom penthouse for sale</a><small>Moore Lane, London, EC2Y</small></h5>
                                                        <h6> <FontAwesomeIcon icon={faPoundSign}
                                                            className='faIcon'

                                                        /> 1,35,000</h6>
                                                    </div>
                                                    <p>Lorem Ipsum is simply dummy text of theprin ting and type setting industry. Lorem Ipsum has been the.</p>
                                                    <ul>
                                                        <li>5 beds</li>
                                                        <li>3 baths</li>
                                                        <li>300 sq st</li>
                                                        <li>1 parking</li>
                                                    </ul>
                                                    <div class="talk-to">
                                                        <a href="#" class="font1 btn-5 btn-1 text-uppercase">
                                                            <span>+012.822.9058</span>
                                                        </a>
                                                        <a href="#" class="font1 btn-4 btn-1 text-uppercase">
                                                            <span>Request Details</span>
                                                        </a>
                                                    </div>
                                                    <a href="#" class="link">view details</a>
                                                </div>
                                            </Col>

                                        </Row>
                                    </div>
                                </Col> */}
                                <nav aria-label="Page navigation">
                                    <ul class="pagination">
                                        <li>
                                            <a href="#" aria-label="Previous">
                                                <span aria-hidden="true">

                                                    <FontAwesomeIcon icon={faAngleLeft} />
                                                </span>
                                            </a>
                                        </li>
                                        <li><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li>
                                            <a href="#" aria-label="Next">
                                                <span aria-hidden="true">

                                                    <FontAwesomeIcon icon={faAngleRight} />
                                                </span>

                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>

                            <Col
                                xs='12' sm='5' md='4'
                                className='side-bar'
                            >
                                <div class="daily-email bg2 text-left">
                                    <h4>Get daily property email alerts in your inbox.</h4>
                                    <input type="email" name="email" placeholder="Email Address"
                                        className='inputProperties'
                                    />
                                    <button class="btn-1 bg1 inputProperties"><span>Subscribe now</span></button>
                                </div>
                                <div class="Categories text-left">
                                    <h6 class="sidebar-title">Nearby Places</h6>
                                    <ul>
                                        <li><a href="#">East Lothian</a></li>
                                        <li><a href="#">Scottish Borders</a></li>
                                        <li><a href="#">Dumfries and Galloway</a></li>
                                        <li><a href="#">Cumbria</a></li>
                                        <li><a href="#">North Yorkshire</a></li>
                                        <li><a href="#">County Durham</a></li>
                                        <li><a href="#">Tyne and Wear</a></li>
                                        <li><a href="#">More Locations</a></li>
                                    </ul>
                                </div>
                                <div class="popular-news text-left">
                                    <h6 class="sidebar-title">Newly Listed Properties</h6>
                                    <div class="news">
                                        <figure>
                                            <a href="#">
                                                <img src={require("../assets/images/property-list-view-agent.jpg")} alt="" />
                                            </a>
                                        </figure>
                                        <div class="popular-news-title">
                                            <h6><a href="#">3 bedroom property sale</a></h6>
                                            <span>Moore Lane, London, EC2Y</span>
                                            <span class="price">£13,500,000</span>
                                        </div>
                                    </div>
                                    <div class="news">
                                        <figure>
                                            <a href="#">
                                                <img src={require("../assets/images/property-list-view-agent.jpg")} alt="" />
                                            </a>
                                        </figure>
                                        <div class="popular-news-title">
                                            <h6><a href="#">3 bedroom property sale</a></h6>
                                            <span>Moore Lane, London, EC2Y</span>
                                            <span class="price">£13,500,000</span>
                                        </div>
                                    </div>
                                    <div class="news">
                                        <figure>
                                            <a href="#">
                                                <img src={require("../assets/images/property-list-view-agent.jpg")} alt="" />
                                            </a>
                                        </figure>
                                        <div class="popular-news-title">
                                            <h6><a href="#">3 bedroom property sale</a></h6>
                                            <span>Moore Lane, London, EC2Y</span>
                                            <span class="price">£13,500,000</span>
                                        </div>
                                    </div>
                                    <div class="news">
                                        <figure>
                                            <a href="#">
                                                <img src={require("../assets/images/property-list-view-agent.jpg")} alt="" />
                                            </a>
                                        </figure>
                                        <div class="popular-news-title">
                                            <h6><a href="#">3 bedroom property sale</a></h6>
                                            <span>Moore Lane, London, EC2Y</span>
                                            <span class="price">£13,500,000</span>
                                        </div>
                                    </div>
                                    <div class="news">
                                        <figure>
                                            <a href="#">
                                                <img src={require("../assets/images/property-list-view-agent.jpg")} alt="" />
                                            </a>
                                        </figure>
                                        <div class="popular-news-title">
                                            <h6><a href="#">3 bedroom property sale</a></h6>
                                            <span>Moore Lane, London, EC2Y</span>
                                            <span class="price">£13,500,000</span>
                                        </div>
                                    </div>
                                    <div class="news">
                                        <a href="#" class="link">View all properties <i class="fa fa-angle-right"></i></a>
                                    </div>
                                </div>
                                <div class="search-porperties text-left">
                                    <h6 class="sidebar-title">Send an Inquiry</h6>
                                    <div class="search-box">
                                        <input type="text" name="name" placeholder="Full name *" className='inputProperties' />
                                        <input type="text" name="name" placeholder="Email address *" className='inputProperties' />
                                        <input type="text" name="name" placeholder="Telephone *" className='inputProperties' />
                                        <textarea placeholder="Message"></textarea>
                                        <button class="btn-1 bg2 inputProperties">
                                            <span >
                                                <span><FontAwesomeIcon icon={faSearch}
                                                    className='searchIconTwo'

                                                /> start search</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </Col>

                        </Row>

                    </Container>

                </section>


            </div>
        )
    }
}