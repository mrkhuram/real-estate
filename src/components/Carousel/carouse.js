import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Container as Contain, Row, Col } from 'reactstrap';
import './body.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
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
  lookingToBuy:{
    padding: '15px 60px',
    backgroundColor: 'white',
    marginRight: 30,
    color: '#232222',
    fontSize: 15,
    fontWeight: '500',
    textTransform:'uppercase',
    '&:hover':{
      textDecoration: 'none'
    }
  },
  lookingToSell:{
    padding: '15px 60px',
    backgroundColor: '#0080c6',
    marginLeft: 30,
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    border: '1px solid white',
    textTransform:'uppercase',

    '&:hover':{
      textDecoration: 'none',
      color: '#232222',
    }
  },
  btn4:{
    '&:before':{

      height:" 100%",
      left: 0,
      top: 0,
      width: "100%",
    }
},

}));
export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>

      <Row>
        <Col sm='12' xs='12' md='12'
        // className='carousel'
        >
            <div className='img'>
                <img src={require('../assets/images/home-page-banner.jpg')} alt=""/>
            </div>
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
    </React.Fragment>
  );
}