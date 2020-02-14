import React from 'react';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container as Contain, Row, Col } from 'reactstrap';
import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Cards from '../Cards/cards'
import ExtraInfo from '../ExtraInfo/extraInfo'
import Neighbors from '../Neighbors/neighbors'
import Properties from '../Properties/properties'
import QuickLinks from '../QuickLinks/quickLinks'
import FeatureProperties from '../featureProperties/featureProperties'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6),
    position: 'relative',
    zIndex: 5,
    backgroundColor: 'white',
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  weBuyOuter: {
    // textAlign: 'center',
    backgroundColor: '#0080c6',
    color: 'white',
    padding: '90px 40px',
    // marginLeft: 0,
    // marginRight: 0
    // width: 1390
    // textTransform: 'uppercase'
    // height: 180
  },
  lookingToBuy: {
    padding: '15px 60px',
    backgroundColor: 'white',
    marginRight: 30,
    color: '#232222',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  lookingToSell: {
    padding: '15px 60px',
    backgroundColor: '#0080c6',
    marginLeft: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    border: '1px solid white',
    textTransform: 'uppercase',

    '&:hover': {
      textDecoration: 'none',
      color: '#232222',
    }
  },
  btn4: {
    '&:before': {

      height: " 100%",
      left: 0,
      top: 0,
      width: "100%",
    }
  },

}));

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
  },

];
const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Row
        style={{ margin: 0 ,
        position: 'relative',
        zIndex: 10
        }}

      >
        <Col sm='12' xs='12' md='12' lg='12'
          className='carousel'
        >
          <Row>
            <div className="inputOuter">
              <Col md='6' xs='8' sm='8'>
                <input type="text" className='inputZip'
                  placeholder='Neighborhood, ZIP code or Listing ID'
                />
              </Col>
              <Col md='2' xs='12' sm='12'
                style={{
                  padding: 0
                }}
              >
                <select name="" id=""
                  className='propertyType'
                >
                  <option>
                    Property Type
                  </option>
                  <option>
                    Option 1
                  </option><option>
                    Option 2
                  </option><option>
                    Option 3
                  </option><option>
                    Option 4
                  </option>
                </select>
              </Col>
              <Col md='2' xs='12' sm='12'
                style={{
                  padding: 0
                }}
              >
                <select name="" id=""
                  className='priceRange'
                >
                  <option>
                    Price Range
                  </option>
                  <option>
                    Option 1
                  </option><option>
                    Option 2
                  </option><option>
                    Option 3
                  </option><option>
                    Option 4
                  </option>
                </select>
              </Col>
              <Col md='2' xs='8' sm='8'>
                <button
                  className='searchBtn'
                >
                  <FontAwesomeIcon icon={faSearch}
                    className='searchIcon'
                  />
                  Search</button>
              </Col>
            </div>

          </Row>
        </Col>
      </Row>

      <Row
        style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 4 }}
      >
        <Col sm='12' xs='12' lg='12'
          style={{
            margin: 'auto',
            textAlign: 'center'
          }}
          className={classes.weBuyOuter}
        >
          <h1 class="text-uppercase"
            style={{
              fontSize: 40,
              fontFamily: "'Muli', sans-serif",
              fontWeight: 'bolder'
            }}
          >We Buy and Sell Homes</h1>
          <p
            style={{
              fontSize: 17
            }}
          >

            Simply click anywhere in the paragraph text and start typing can copy combinations</p>
          <div class="action-button"
            style={{
              marginTop: 50
            }}
          >
            <a href="#" class="text-uppercase"
              className={classes.lookingToBuy}>
              <span

              >looking to buy</span>
              {/* <br/> */}
            </a>

            <p
              style={{ display: 'inline' }}
            >OR</p>

            <a href="#" class="text-uppercase"
              className={classes.lookingToSell}
            >
              <span>looking to sell</span>
            </a>
          </div>
        </Col>
      </Row>



      <FeatureProperties />
      {/* < span style={{position: 'relative', zIndex: 4, backgroundColor: 'white'}}>
        <Row className={classes.heroContent}>
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
              textAlign: 'center'
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
      </span> */}

      <ExtraInfo />

      <Neighbors />

      <section class="story-wrapper index">
        <div class="overlay">

        </div>
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-5">
              <div class="story">
                <h3>Unytoinette &amp; Beelson</h3>
                <p>We had previously listed our home for 8 months with no offers, and we sold it the second time around with ModernHaus in 4 days, above the asking price.</p>
                <a href="#" class="btn-1 watchStory flat-btn">
                  <span>Watch Story Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Properties />

      <QuickLinks />




      {/* Footer */}
      {/* <Contain maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Contain> */}
      {/* End footer */}
    </React.Fragment>
  );
}