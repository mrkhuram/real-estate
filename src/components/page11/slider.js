import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class SimpleSlider extends React.Component {

    render() {


        return (
            <Carousel 
            showStatus={false}
            autoPlay={true}
            showArrows={false}
            showIndicators={false}
            infiniteLoop={true}
           
            >
                <div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />

                </div>
                <div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />
                </div>
                <div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />
                </div>
                <div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />
                </div><div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />
                </div><div>
                    <img src={require("../assets/images/property-single-with-sidebar.jpg")} alt="" />
                </div>
            </Carousel>
        );
    }
}