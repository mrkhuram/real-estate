import React from 'react';
import {

    Row,
    Col,
    Container
} from 'reactstrap';

import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class QuickLinks extends React.Component {

    addClass =()=>{
         
        
    }
    render() {

        return (
            <section class="ouick-links-wrapper reveal index section-padding">

                <Container>
                    <Row>
                        <Col xs='12' sm='12' md='12'>
                            <ul class="tabs font1">
                                <li class="active" rel="tab1" >Popular Searches</li>
                                <li rel="tab2">Rental Properties</li>
                                <li rel="tab3">Apartments &amp; Units</li>
                                <li rel="tab4">Commercial &nbsp; &nbsp;&nbsp;&nbsp;</li>
                            </ul>
                            <div class="tab_container">
                                {/* <h6 class="d_active tab_drawer_heading" rel="tab1">Popular Searches</h6> */}
                                <div id="tab1" class="tab_content">
                                    <ul>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Buffalo Real Estate</a></li>
                                        <li><a href="#">Burlington Real Estate</a></li>
                                        <li><a href="#">Charleston Real Estate</a></li>
                                        <li><a href="#">Charlotte Real Estate</a></li>
                                        <li><a href="#">Chicago Real Estate</a></li>
                                        <li><a href="#">Cincinnati Real Estate</a></li>
                                        <li><a href="#">Cleveland Real Estate</a></li>
                                        <li><a href="#">Columbia Real Estate</a></li>
                                        <li><a href="#">Columbus Real Estate</a></li>
                                        <li><a href="#">Dallas Real Estate</a></li>
                                        <li><a href="#">Dayton Real Estate</a></li>
                                        <li><a href="#">Denver Real Estate</a></li>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Detroit Real Estate</a></li>
                                        <li><a href="#">El Paso Real Estate</a></li>
                                        <li><a href="#">Fort Lauderdale Real Estate</a></li>
                                        <li><a href="#">Fort Myers Real Estate</a></li>
                                        <li><a href="#">Fort Worth Real Estate</a></li>
                                        <li><a href="#">Grand Rapids Real Estate</a></li>
                                        <li><a href="#">Greenville Real Estate</a></li>
                                        <li><a href="#">Houston Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                    </ul>
                                </div>

                                {/* <!-- #tab1 --> */}
                                {/* <h6 class="tab_drawer_heading" rel="tab2">Rental Properties</h6> */}
                                {/* <div id="tab2" class="tab_content">
                                    <ul>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Buffalo Real Estate</a></li>
                                        <li><a href="#">Burlington Real Estate</a></li>
                                        <li><a href="#">Charleston Real Estate</a></li>
                                        <li><a href="#">Charlotte Real Estate</a></li>
                                        <li><a href="#">Chicago Real Estate</a></li>
                                        <li><a href="#">Cincinnati Real Estate</a></li>
                                        <li><a href="#">Cleveland Real Estate</a></li>
                                        <li><a href="#">Columbia Real Estate</a></li>
                                        <li><a href="#">Columbus Real Estate</a></li>
                                        <li><a href="#">Dallas Real Estate</a></li>
                                        <li><a href="#">Dayton Real Estate</a></li>
                                        <li><a href="#">Denver Real Estate</a></li>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Detroit Real Estate</a></li>
                                        <li><a href="#">El Paso Real Estate</a></li>
                                        <li><a href="#">Fort Lauderdale Real Estate</a></li>
                                        <li><a href="#">Fort Myers Real Estate</a></li>
                                        <li><a href="#">Fort Worth Real Estate</a></li>
                                        <li><a href="#">Grand Rapids Real Estate</a></li>
                                        <li><a href="#">Greenville Real Estate</a></li>
                                        <li><a href="#">Houston Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                    </ul>
                                </div> */}

                                {/* <!-- #tab2 --> */}
                                {/* <h6 class="tab_drawer_heading" rel="tab3">Apartments &amp; Units</h6> */}
                                {/* <div id="tab3" class="tab_content">
                                    <ul>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Buffalo Real Estate</a></li>
                                        <li><a href="#">Burlington Real Estate</a></li>
                                        <li><a href="#">Charleston Real Estate</a></li>
                                        <li><a href="#">Charlotte Real Estate</a></li>
                                        <li><a href="#">Chicago Real Estate</a></li>
                                        <li><a href="#">Cincinnati Real Estate</a></li>
                                        <li><a href="#">Cleveland Real Estate</a></li>
                                        <li><a href="#">Columbia Real Estate</a></li>
                                        <li><a href="#">Columbus Real Estate</a></li>
                                        <li><a href="#">Dallas Real Estate</a></li>
                                        <li><a href="#">Dayton Real Estate</a></li>
                                        <li><a href="#">Denver Real Estate</a></li>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Detroit Real Estate</a></li>
                                        <li><a href="#">El Paso Real Estate</a></li>
                                        <li><a href="#">Fort Lauderdale Real Estate</a></li>
                                        <li><a href="#">Fort Myers Real Estate</a></li>
                                        <li><a href="#">Fort Worth Real Estate</a></li>
                                        <li><a href="#">Grand Rapids Real Estate</a></li>
                                        <li><a href="#">Greenville Real Estate</a></li>
                                        <li><a href="#">Houston Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                    </ul>
                                </div> */}

                                {/* <!-- #tab3 --> */}
                                {/* <h6 class="tab_drawer_heading" rel="tab4">Commercial</h6> */}
                                {/* <div id="tab4" class="tab_content">
                                    <ul>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Buffalo Real Estate</a></li>
                                        <li><a href="#">Burlington Real Estate</a></li>
                                        <li><a href="#">Charleston Real Estate</a></li>
                                        <li><a href="#">Charlotte Real Estate</a></li>
                                        <li><a href="#">Chicago Real Estate</a></li>
                                        <li><a href="#">Cincinnati Real Estate</a></li>
                                        <li><a href="#">Cleveland Real Estate</a></li>
                                        <li><a href="#">Columbia Real Estate</a></li>
                                        <li><a href="#">Columbus Real Estate</a></li>
                                        <li><a href="#">Dallas Real Estate</a></li>
                                        <li><a href="#">Dayton Real Estate</a></li>
                                        <li><a href="#">Denver Real Estate</a></li>
                                        <li><a href="#">Albany Real Estate</a></li>
                                        <li><a href="#">Albuquerque Real Estate</a></li>
                                        <li><a href="#">Alexandria Real Estate</a></li>
                                        <li><a href="#">Arlington Real Estate</a></li>
                                        <li><a href="#">Atlanta Real Estate</a></li>
                                        <li><a href="#">Austin Real Estate</a></li>
                                        <li><a href="#">Baltimore Real Estate</a></li>
                                        <li><a href="#">Baton Rouge Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                        <li><a href="#">Detroit Real Estate</a></li>
                                        <li><a href="#">El Paso Real Estate</a></li>
                                        <li><a href="#">Fort Lauderdale Real Estate</a></li>
                                        <li><a href="#">Fort Myers Real Estate</a></li>
                                        <li><a href="#">Fort Worth Real Estate</a></li>
                                        <li><a href="#">Grand Rapids Real Estate</a></li>
                                        <li><a href="#">Greenville Real Estate</a></li>
                                        <li><a href="#">Houston Real Estate</a></li>
                                        <li><a href="#">Bellevue Real Estate</a></li>
                                        <li><a href="#">Bethesda Real Estate</a></li>
                                        <li><a href="#">Birmingham Real Estate</a></li>
                                        <li><a href="#">Boston Real Estate</a></li>
                                    </ul>
                                </div> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    };
}

export default QuickLinks;