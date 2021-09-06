import { Card, CardContent, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";
import { UserContext } from "../../providers/userContext";
import cssClasses from "../cssClasses";

const styles = makeStyles(theme => ({
    card: {
        marginTop: '20%'
    },
}))

const Login = () => {

    const userService = useContext(UserContext);

    const baseClasses = cssClasses();
    const classes = styles();
    const history = useHistory();
    const url = app_config.api_url;

    const loginForm = {
        email: '',
        password: ''
    };

    const fetchProfile = (id) => {
        fetch(url + '/profile/getbyuser/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                sessionStorage.setItem('profile', JSON.stringify(data));
            })
    }

    const onFormSubmit = (formdata, { setSubmitting }) => {
        setSubmitting = true;

        userService.getUserByEmail(formdata.email)
            .then(userdata => {
                if (userdata) {
                    console.log(userdata);

                    if (userdata['password'] == formdata['password']) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Great!',
                            text: 'Successfully Loggedin',
                        }).then(() => {

                            userService.setLoggedin(true);
                            sessionStorage.setItem('user', JSON.stringify(userdata));
                            userService.setCurrentUser(userdata);
                            fetchProfile(userdata._id);
                            if (userdata['isadmin']) {
                                history.push('/admin/dashboard');
                            } else {
                                history.push('/influencer');
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops!',
                            text: "Email and Password does't match",
                        });
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops!',
                        text: "Email and Password does't match",
                    });
                }
                setSubmitting = false;
            })

    }

    return (
        <div className="col-md-3 mx-auto">

            <Card className={clsx(baseClasses.card, classes.card)}>
                <CardContent className={baseClasses.cardContent}>
                    <Formik
                        initialValues={loginForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>

                                <h3 className="text-center">Login Here</h3>

                                <label className="mt-4">Email</label>
                                <input type="text" className="form-control" id="email" onChange={handleChange} value={values.email} />

                                <label className="mt-4">Password</label>
                                <input type="password" className="form-control" id="password" onChange={handleChange} value={values.password} />



                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning mt-5 w-100">Submit</button>
                                </div>

                                <p className="mt-3 text-center">Register Instead? <Link to="/main/register">Register Here</Link></p>

                            </form>
                        )}
                    </Formik>

                </CardContent>

            </Card>
        </div>
    )

}

export default Login;