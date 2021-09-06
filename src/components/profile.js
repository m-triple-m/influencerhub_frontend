import { Button, Card, CardContent, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../config";
import { UserContext } from "../providers/userContext";
import cssClasses from "./cssClasses";

const customStyles = makeStyles(theme => ({
    card: {
        // marginTop: '5rem'
    }
}))

const Profile = props => {

    const baseClasses = cssClasses();
    const customClasses = customStyles();
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [profile, setProfile] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const url = app_config.api_url;

    const userService = useContext(UserContext);

    useEffect(() => {

    }, [])

    const enableProfile = () => {
        const form = {
            user: user,
            data: {

            },
            created: new Date(),
            socialProfiles: []
        }

        const opt = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        }

        fetch(url + '/profile/add', opt)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProfile(data);
                Swal.fire({
                    icon: 'success',
                    title: 'Welldone!',
                    text: 'Your Profile is Live'
                })
            });
    }

    const updateForm = {

        fullname: '',
        email: '',
        password: '',
        about: ''
    };

    const onFormSubmit = (value, { setSubmitting }) => {

        userService.updateUser(user._id, value)
            .then(data => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welldone!',
                    text: 'Profile Successfully Updated!'
                })
                console.log(data);
            })


    }

    return (
        <div className="col-md-9 mx-auto">
            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent>
                    <div className="row mt-5 mb-4">
                        <div className="col-6">
                            <h2>Influencer Profile</h2>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6">
                                    <Button className="w-100" disabled={profile} onClick={enableProfile}>{profile ? 'Already Enabled' : 'Enable'}</Button>
                                </div>
                                {
                                    profile ? <div className="col-6">
                                        <a href={'/profile/' + profile._id} target="_blank" className="w-100 btn btn-primary" disabled={!profile}>View Profile</a>
                                    </div>
                                        :
                                        <h1></h1>
                                }

                            </div>
                        </div>
                    </div>
                    <hr />
                    <h3 className="text-center">Update Basic Profile</h3>
                    <div className="row">
                        <div className="col-md-4 mt-5">

                            <img className="img-fluid" src={url + '/' + user.avatar} />
                        </div>
                        <div className="col-md-8">
                            <Formik
                                initialValues={user}
                                onSubmit={onFormSubmit}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting
                                }) => (
                                    <form onSubmit={handleSubmit}>



                                        <TextField label="Full Name" variant="filled" name="fullname" className={baseClasses.input} onChange={handleChange} value={values.username} />
                                        <TextField label="Email" variant="filled" name="email" className={baseClasses.input} onChange={handleChange} value={values.email} />
                                        <TextField type="password" label="Password" name="password" variant="filled" className={baseClasses.input} onChange={handleChange} value={values.password} />
                                        <TextField type="text" multiline rows={4} label="About" name="about" variant="filled" className={baseClasses.input} onChange={handleChange} value={values.about} />

                                        <div className="text-center">
                                            <Button className="mt-5 w-100" type="submit">Submit</Button>
                                        </div>

                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default Profile;