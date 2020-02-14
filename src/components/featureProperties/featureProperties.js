import React from 'react';
import {

    Row,
    Col,
    Container as Contain
} from 'reactstrap';
import img1 from '../assets/images/featured-properties-1.jpg'
import Container from '@material-ui/core/Container';
import Cards from '../Cards/cards'


class FeatureProperties extends React.Component {


    
    render() {

        return (
            <>
               < div style={{position: 'relative', zIndex: 6, backgroundColor: 'white',
               display:'inline-block',
               margin: 'auto',
               padding: "50px 0px 100px 0px" 
        
                }}>
                <Row 
                style={
                    {
                        position: 'relative',
                        zIndex: 5,
                        backgroundColor: 'white',
                    }
                }
                >
                <Col sm='12' xs='12' md='12'
                    style={{ textAlign: 'center' }}
                >
                    <h2 className='featuredHeading'>
                    Featured Properties
                     </h2>
                    <span
                    className='featuredLine'
                    >--------</span>
                </Col>

                </Row>


        <Contain

        >
          <Row
            style={{
              textAlign: 'center',
              marginTop: 30
            }}
          >
            <Col md='12' xs='12' sm='12'
              className='borderLeft'

            >

            </Col>
            <Col xs='12' sm='12' md='3'
              className='borderedText'
            >
              <span
                style={{ color: '#0080c6', }}
              >
                Residential &nbsp;
  
            </span>
              | Commercial
            </Col>
          </Row>

        </Contain>

        <Container>
          <Cards />

        </Container>
      </div>
            </>
        );
    };
}

export default FeatureProperties;