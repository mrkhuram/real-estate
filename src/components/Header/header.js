import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    "root": {
        flexGrow: 1,
        // height: 300
    },
    "menuButton": {
        marginRight: theme.spacing(2),
    },
    "title": {
        flexGrow: 1,
        display: 'inline-flex',
        marginLeft: 40,

    },
    "navBtn": {
        width: 100,
        color: '#383838',
        backgroundColor: 'transparent',
        padding: "40px 20px"
    },
    "header": {
        height: 100,
        backgroundColor: 'white'
    },
    navBtnAdd: {
        color: 'white',
        backgroundColor: '#0080c6',
        padding: "37px 55px",
        fontSize: 15,
        '&:hover':{
            backgroundColor: 'transparent
            '
        }
        
    },
    toolbar: {
        padding: 0,
        fontFamily: "'Muli', sans-serif",
        fontSize: 15
    },

})

class Header extends React.Component {


    render() {
        const { classes } = this.props

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.header}>
                    <Toolbar className={classes.toolbar}>
                        {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
            
                            </IconButton> */}
                        <Typography className={classes.title}>
                            <img
                                src={require('../assets/images/logo.png')}
                                alt=""

                            />
                        </Typography>
                        <Button color="inherit" className={classes.navBtn}>Home</Button>
                        <Button color="inherit" className={classes.navBtn}>Page</Button>
                        <Button color="inherit" className={classes.navBtn}>Properties</Button>
                        <Button color="inherit" className={classes.navBtn}>Blogs</Button>
                        <Button color="inherit" className={classes.navBtn}>Agents</Button>
                        <Button color="inherit" className={classes.navBtn}>Contact</Button>
                        <Button color="inherit" className={classes.navBtnAdd}>ADD LISTING</Button>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default withStyles(styles)(Header)
