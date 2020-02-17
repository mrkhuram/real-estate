import React from 'react'
import {
    Row, Col
} from 'reactstrap'
export default class Body extends React.Component {
    render() {
        return (
            <div>
                <section class="search-bar section-padding index">

                    <Row>

                        <Col xs='12' sm='12' md='12'
                        >
                            <ul class="right-search">
                                <li>
                                    <input type="text" id="location" placeholder="Neighborhood, ZIP code or Listing ID" name="email" />
                                </li>
                                <li>
                                    <select>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                        <option value="Location">Location</option>
                                    </select>
                                </li>
                                <li>
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
                                        <span><i class="fa fa-search"></i> start search</span>
                                    </button>
                                </li>
                            </ul>
                        </Col>
                    </Row>

                </section>
            </div>
        )
    }
}