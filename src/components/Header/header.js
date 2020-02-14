import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  NavbarText
} from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const styles = theme =>({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class Header extends React.Component{
    state={
        isOpen: false,
        dropdownOpen: false,
        page: false,
        left: false,
        properties: false,
        blogs: false,
        agents: false
    }
    toggle = ()=> {
        this.setState(prevState => ({
          isOpen: !prevState.isOpen
        }));
      }
      onMouseEnter = ()=> {
        this.setState({dropdownOpen: true});
      }
    
      onMouseLeave = ()=> {
        this.setState({dropdownOpen: false});
      }
      onMouseEnterPage = (e)=> {
        
        this.setState({page: true});
      }
    
      onMouseLeavePage = ()=> {
        this.setState({page: false});
      }
      onMouseEnterProperties = ()=> {
        
        this.setState({properties: true});
      }
    
      onMouseLeaveProperties = ()=> {
        this.setState({properties: false});
      }


      onMouseEnterBlogs = (e)=> {
        
        this.setState({blogs: true});
      }
    
      onMouseLeaveBlogs = ()=> {
        this.setState({blogs: false});
      } 
      onMouseEnterAgents = (e)=> {
        
        this.setState({agents: true});
      }
    
      onMouseLeaveAgents = ()=> {
        this.setState({agents: false});
      }




      
      render(){
        console.log(this.props);
        
        
        
        const sideList = side => (
          <div
            className={this.props.classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </div>
        );
      
  
  
      
  
        const toggleDrawer = (side, open) => event => {
          if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
      
          this.setState({ ...this.state, [side]: open });
        };
  

  return (
    <div className='headerOuter'>

        <SwipeableDrawer
        open={this.state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList('left')}
      
      </SwipeableDrawer>

      <Navbar color="white" light expand="md"
      className="navBar"
      style={{
        padding: 0
      }}
      >
        <NavbarToggler
         onClick={toggleDrawer('left', true)}
         />
        <NavbarBrand href="/" 
        className='navLogo'
        >
            <img src={require('../assets/images/logo.png')} alt=""/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar 
        className='navList'
        
        >
          <Nav  navbar>

          <UncontrolledDropdown nav 
          onMouseOver={this.onMouseEnter} 
          onMouseLeave={this.onMouseLeave} 
          isOpen={this.state.dropdownOpen} 
          toggle={this.toggle}
          className="homeBtn navBtn"
          >
              <DropdownToggle nav 
              onMouseOver={this.onMouseEnter}
              >
              Home
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  Home Page V 1
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                Home Page V 2
                 
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Home Page V 3

                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Home Page V 4

                </DropdownItem><DropdownItem divider />
                <DropdownItem>
                Home Page V 5

                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>



            <UncontrolledDropdown nav
            onMouseOver={this.onMouseEnterPage} 
            onMouseLeave={this.onMouseLeavePage} 
            isOpen={this.state.page} 
            toggle={this.toggle}
            className="pageBtn navBtn"
            name='page'

            >
              <DropdownToggle nav
            onMouseOver={this.onMouseEnterPage} 

              
              >
              Page
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  FAQ's
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  404 Error
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Login
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  About Us Page
                </DropdownItem><DropdownItem divider />
                <DropdownItem>
                  Pricing Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>


            <UncontrolledDropdown nav 

             onMouseLeave={this.onMouseLeaveProperties} 
             isOpen={this.state.properties} 
             toggle={this.toggle}
             className="propertiesBtn navBtn"
            >
              <DropdownToggle nav
             onMouseOver={this.onMouseEnterProperties} 
              
              >
                Properties
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  Properties Grid
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  Properties List
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                Properties Map
               
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  Properties Grid Sidebar
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  Properties List Sidebar
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Properties Single
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Properties Single Fullwidth
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav 

             onMouseLeave={this.onMouseLeaveBlogs} 
             isOpen={this.state.blogs} 
             toggle={this.toggle}
             className="blogsBtn navBtn"
            >
              <DropdownToggle nav
             onMouseOver={this.onMouseEnterBlogs} 
              
              >
                Blogs
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  Blogs Grid
                </DropdownItem>
           
                <DropdownItem divider />

                <DropdownItem>
                  Blogs Grid Sidebar
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  Blogs Single
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Blogs Single Page
                </DropdownItem>
              </DropdownMenu>
           
           
           
            </UncontrolledDropdown>
            
            
            
            <UncontrolledDropdown nav 
             onMouseLeave={this.onMouseLeaveAgents} 
             isOpen={this.state.agents} 
             toggle={this.toggle}
             className="agentsBtn navBtn"
            >
              <DropdownToggle nav
             onMouseOver={this.onMouseEnterAgents} 
              
              >
                Agents
              </DropdownToggle>
              <DropdownMenu center>
                <DropdownItem>
                  Our Agents
                </DropdownItem>
               
                <DropdownItem divider />
                <DropdownItem>
                  Agents Single Page
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>



          <UncontrolledDropdown nav 
             className="agentsBtn navBtn"
            >
              <DropdownToggle nav>
                Contact
              </DropdownToggle>
            
            </UncontrolledDropdown>

                
          </Nav>
          <Button
          className='addBtn'
          style={{
            color: 'white',
            backgroundColor: '#0080c6',
            padding: "37px 65px",
            fontSize: 16,
            fontWeight: 500,
          }}
          >Add Listing</Button>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default withStyles(styles)(Header);