import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const styles = theme => ({
    root: {

        width: '100%',
    },
    flex: {
        flex: 1,
        fontFamily: 'Megrim',
        fontWeight:600,
        letterSpacing:2,
        alignItems:'left',
        color:'#a7e66d',
        fontSize:'32px',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    navBar:{
    backgroundColor:'#374251',
    },
});

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navBar}>
                <Toolbar>

                    <Typography type="title" color="inherit" className={classes.flex}>
                        Umang
                    </Typography>
                    <Button color="contrast">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);