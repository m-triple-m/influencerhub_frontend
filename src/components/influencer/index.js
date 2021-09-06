import { useState } from 'react';
import DrawerComponent from '../drawer';
import Header from '../header';
import { useRouteMatch, Switch, Route } from 'react-router';
import ManageInsta from './manageInsta';
import React from 'react';
import ManageYoutube from './manageYoutube';
import ManageLinkedin from './manageLinkedin';
import ManageFB from './manageFB';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PersonIcon from '@material-ui/icons/Person';
import Profile from '../profile';
import { Redirect } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 60,
        height: '100vh'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 230,
    },
}));

const InfluencerDashboard = () => {

    const [open, setOpen] = React.useState(true);
    const classes = useStyles();

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();

    const drawerOptions = [
        {
            name: "Profile",
            icon: <PersonIcon />,
            link: `${url}/profile`
        },
        {
            name: "Manage Facebook",
            icon: <FacebookIcon />,
            link: `${url}/managefb`
        },
        {
            name: "Manage Youtube",
            icon: <YouTubeIcon />,
            link: `${url}/manageyoutube`
        },
        {
            name: "Manage Instagram",
            icon: <InstagramIcon />,
            link: `${url}/manageinsta`
        },
        {
            name: "Manage Linkedin",
            icon: <LinkedInIcon />,
            link: `${url}/managelinkedin`
        },
    ]

    return (
        <div>
            <Header open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerOpen={handleDrawerOpen} drawer={true} />
            <DrawerComponent open={open} setOpen={setOpen} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} drawerOptions={drawerOptions} />

            <div className={clsx(classes.content, {
                [classes.contentShift]: open,
            }, 'user-layout')}>

                <Switch>
                    <Route path={`${path}/profile`} component={Profile} />
                    <Route path={`${path}/manageinsta`} component={ManageInsta} />
                    <Route path={`${path}/managefb`} component={ManageFB} />
                    <Route path={`${path}/manageyoutube`} component={ManageYoutube} />
                    <Route path={`${path}/managelinkedin`} component={ManageLinkedin} />
                    <Redirect path={`${path}`} to="/influencer/profile" />

                </Switch>
            </div>
        </div>
    )
}


export default InfluencerDashboard;