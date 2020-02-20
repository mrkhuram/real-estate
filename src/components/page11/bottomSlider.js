import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default class BottomSlider extends React.Component {

  responsive = {
    0: { items: 1 },
    1024: { items: 2 },
  }
  render() {

    return (
      <>
          <div class="other-properties index">
            <h4 class="property-single-detail-title">Other Properties Within This Area</h4>
            <ul class="other-single-slider">
        <AliceCarousel
          responsive={this.responsive}
          autoPlayInterval={4000}
          autoPlayDirection="rtl"
          autoPlay={true}
          fadeOutAnimation={true}
          disableAutoPlayOnAction={true}
          buttonsDisabled={true}
        >
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              <li
              style={{
                marginLeft: 20
              }}
              >
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>
              </AliceCarousel>

            </ul>
            {/* <ul class="other-single-slider">
              <li>
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>

            </ul>
            <ul class="other-single-slider">
              <li>
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>

            </ul>
            <ul class="other-single-slider">
              <li>
                <div class="featured-properties text-left">
                  <figure class="featured-image">
                    <a href="#">
                      <img src={require("../assets/images/featured-properties-1.jpg")} alt="" />
                      <span class="overlay-1"></span>
                    </a>
                    <figcaption>
                      <span>5 Beds</span>
                      <span>3 Baths</span>
                      <span>300 Sq Ft</span>
                      <span>1 Parking</span>
                    </figcaption>
                  </figure>
                  <h5><a href="#">4 bedroom penthouse for sale</a></h5>
                  <span>Moore Lane, London, EC2Y</span>
                  <span class="price">£13,500,000</span>
                </div>
              </li>

            </ul> */}
          

          </div>
      </>
    )
  }
}