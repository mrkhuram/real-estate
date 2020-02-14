import React from 'react';
import {

    Row,
    Col
} from 'reactstrap';
import img1 from '../assets/images/featured-properties-1.jpg'

class Cards extends React.Component {


    cards = [
        {
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',   
            rent: 'rent bg1',
            name: 'rent'
        },
        {
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',
            rent: '',
            name: ''
        }, {
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',
            rent: 'sale bg2',
            name: 'sale'

        },
        {
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',
            rent: '',
            name: ''
        },{
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',
            rent: '',
            name: ''
        },{
            img: img1,
            title: '4 bedroom penthouse for sale',
            cardSubtitle: 'Moore Lane, London, EC2Y',
            price: '£13,500,000',
            rent: '',
            name: ''
        },
        
    ]
    render() {

        return (
            <Row
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '0px 50px',
                    textAlign:'center',
                    position: 'relative',
                    zindex: 13
                }}
            >
                {
                    this.cards.map((item) => {


                        return <Col sm='6' xs='6' md='4'>
                            <div class="featured-properties text-left">
                                <figure class="featured-image">
                                    <a href="#">
                                        <img src={item.img} alt="" width='100%'/>
                                        <span class={item.rent}>{item.name}</span>
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
                        </Col>
                    })
                }
                            <a href="#" class="btn-1 text-uppercase">
                                <span>view all residential properties</span>
                            </a>
            </Row>
        );
    };
}

export default Cards;