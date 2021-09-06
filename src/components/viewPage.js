import { useState } from 'react';
import DrawerComponent from './drawer';
import Header from './header';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { useRouteMatch, Switch, Route } from 'react-router';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    header: {
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top'
    }
}))

const ViewPage = () => {

    const [open, setOpen] = useState(false);
    const styles = useStyles();

    const handleDrawerOpen = () => {
        console.log('drawer opened');
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();


    return (
        <div>
            <Header />

            <div className="col-md-12">
                <header style={{ backgroundImage: 'url(http://192.168.43.91:5500/assets/img/hero-bg.jpg)' }} className={styles.header}>

                </header>
                <div className="mt-5 about-me col-md-10 mx-auto">
                    <h1 className="text-center">About Me</h1>
                    <div className="mt-4 row">
                        <div className="col-md-4" style={{ height: '10rem' }}>
                            <img src={'http://192.168.43.91:5500/assets/img/me.jpg'} style={{ width: '100%' }} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                </div>
                                <div className="col-md-6">
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                    <p><strong>Name : </strong> {'name here'} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default ViewPage;