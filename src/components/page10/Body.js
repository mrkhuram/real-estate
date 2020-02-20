import React from 'react'
import {
    Row, Col, Container
} from 'reactstrap'

import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropertiesList from './propertiesP10'

import './styles.css'

export default class Body extends React.Component {
    render() {
        return (
            <div>
                {/* Search Bar Start */}
                <section class="search-bar section-padding index">

                    <Row>

                        <Col xs='12' sm='12' md='12'
                        >
                            <ul class="right-search">
                                <li>
                                    <input type="text" id="location" placeholder="Neighborhood, ZIP code or Listing ID" name="email" />
                                </li>
                                <li className='li'>
                                    <select>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                    </select>
                                </li>
                                <li className='li'>
                                    <select>
                                        <option value="Price range">Price range</option>
                                        <option value="Price range">Price range</option>
                                        <option value="Price range">Price range</option>
                                        <option value="Price range">Price range</option>
                                    </select>
                                </li>
                                <li>
                                    <select>
                                        <option value="property type">property type</option>
                                        <option value="property type">property type</option>
                                        <option value="property type">property type</option>
                                        <option value="property type">property type</option>
                                    </select>
                                </li>
                                <li>
                                    <select>
                                        <option value="baths">baths</option>
                                        <option value="baths">baths</option>
                                        <option value="baths">baths</option>
                                        <option value="baths">baths</option>
                                    </select>
                                </li>
                                <li>
                                    <select>
                                        <option value="beds">beds</option>
                                        <option value="beds">beds</option>
                                        <option value="beds">beds</option>
                                        <option value="beds">beds</option>
                                    </select>
                                </li>
                                <li>
                                    <button type="button" class="btn-1">
                                        <span><FontAwesomeIcon icon={faSearch}
                                            className='searchIconTwo'
                                        /> start search</span>
                                    </button>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                </section>

                {/* Search Bar END */}

                {/* Properties List END */}

                <PropertiesList />

                {/* Properties List END */}


                {/* <!-- Subscribe Start --> */}
                <section class="subscribe-wrapper bg3 reveal index">
                    <Container>
                        <Row>


                            <Col
                                xs='12' sm='12' md={{ size: 10, offset: 1 }}>
                                <p>Get latest updates in your inbox</p>
                                <div class="subscribe">
                                    <input type="text" name="email" placeholder='Email Address' 
                                    className='inputProperties'
                                    />
                                    <button class="btn-1 bg2 font1 inputProperties"><span>subscribe now !</span></button>
                                </div>

                            </Col>

                        </Row>
                    </Container>
                </section>
                {/* <!-- Subscribe End --> */}


            </div>
        )
    }
}