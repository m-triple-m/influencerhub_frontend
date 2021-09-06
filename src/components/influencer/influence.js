import { Card, CardContent, makeStyles } from "@material-ui/core";
import app_config from "../../config";
import './inf.css';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import {
    LinkedinProfile,
} from 'react-social-plugins';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = makeStyles(theme => ({
    cardContent: {
        padding: '6rem'
    }
}))

const Influence = props => {

    const url = app_config.api_url + '/';
    const useStyles = styles();
    const fb_api = app_config.fb_api;
    const { id } = useParams();
    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchProfile = () => {
        fetch(url + 'profile/getbyid')
    }

    useEffect(() => {
        fetch(url + 'profile/getbyid/' + id)
            .then(res => res.json())
            .then(data => {
                setDetails(data);
                console.log(data);
                setLoading(false);
            })
    }, [])

    // const details = {
    //     back: ,
    //     avatar: 'avatar.png',
    //     name: 'Leon S Kennedy',
    //     description: 'This series of guides explains how to use the YouTube Data API (v3) to perform many different types of functions. It includes descriptions, pointers to code samples, and links that populate the APIs Explorer with sample queries.',
    //     social: {
    //         fb: {

    //         },
    //         youtube: {

    //         },
    //         instagram: {

    //         },
    //         linkedin: {

    //         }
    //     }
    // }

    console.log(url + details.back)

    const renderPersonal = () => {
        if (!loading) {
            return (
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <img className="img-fluid" src={url + details.user.avatar} />
                    </div>
                    <div className="col-md-7">
                        <h1 className="name">{details.user.fullname}</h1>
                        <h3 className="name">{details.user.email}</h3>
                        <i>{details.user.about}</i>
                        <div className="row mt-5">
                            <div className="col-2">
                                <img className="img-fluid" src={url + 'mta.png'} />
                            </div>
                            <div className="col-2">
                                <img className="img-fluid" src={url + 'logo.png'} />
                            </div>
                            <div className="col-2">
                                <img className="img-fluid" src={url + 'angular.png'} />
                            </div>
                            <div className="col-2">
                                <img className="img-fluid" src={url + 'react.png'} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }

    const renderFacebook = () => {
        if (!loading) {
            console.log(details);
            let posts = [];
            for (let socialProfile of details.socialProfiles) {
                if (socialProfile.platform == 'facebook') {
                    console.log(socialProfile);
                    return (
                        <div>
                            <img src={'data:image/png;base64,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'} style={{ height: '7rem' }} />

                            <div className="row mt-5">
                                {socialProfile.data.posts.map((link, index) => {
                                    return (
                                        <div key={index} className="col-md-4">
                                            <FacebookProvider appId={fb_api}>
                                                <EmbeddedPost href={link} width="100%" target="_top" />
                                            </FacebookProvider>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    )
                }
            }
        }


    }

    const renderLinkedin = () => {
        if (!loading) {
            console.log(details);
            let posts = [];
            for (let socialProfile of details.socialProfiles) {
                if (socialProfile.platform == 'linkedin') {
                    console.log(socialProfile);
                    return (
                        <div>
                            <img src={'https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png'} style={{ height: '5rem' }} />


                            <div className="row mt-5">
                                {socialProfile.data.posts.map((link, index) => {
                                    return (
                                        <div key={index} className="col-md-4">
                                            <iframe src={link} height="431" width="100%" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                }
            }
        }


    }

    const renderYoutube = () => {
        if (!loading) {
            console.log(details);
            let posts = [];
            for (let socialProfile of details.socialProfiles) {
                if (socialProfile.platform == 'youtube') {
                    console.log(socialProfile);
                    return (
                        <div>
                            <img src={'https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'} style={{ height: '10rem' }} />

                            <div className="row mt-5">
                                {socialProfile.data.posts.map((link, index) => {
                                    return (
                                        <div key={index} className="col-md-6">
                                            <iframe width="100%" height="400" src={"https://www.youtube.com/embed/" + link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                    )
                }
            }
        }


    }

    const renderIt = () => {
        setTimeout(() => { }, 4000);
        console.log(details);
        return (
            <div>
                <header className="header" style={{ backgroundImage: `url(${url + 'inf_back.jfif'})` }}>

                </header>
                <div className="col-md-10 mx-auto">
                    <Card style={{ marginTop: '-10rem' }} className="profile">
                        <CardContent className={useStyles.cardContent}>
                            {renderPersonal()}
                            <hr />
                            <section className="facebook" style={{ marginTop: '10rem' }}>
                                {renderFacebook()}

                            </section>

                            <section className="instagram" style={{ marginTop: '10rem' }}>

                            </section>

                            <section className="youtube" style={{ marginTop: '10rem' }}>

                                {renderYoutube()}

                            </section>

                            <section className="linkedin" style={{ marginTop: '10rem' }}>

                                {renderLinkedin()}
                            </section>
                        </CardContent>
                    </Card>
                </div>


            </div>

        )
    }

    return (
        <div>
            {renderIt()}
        </div>

    )
}

export default Influence;