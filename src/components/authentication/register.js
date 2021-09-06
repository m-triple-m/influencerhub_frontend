import { Card, CardContent, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import { Formik } from "formik";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/userContext";
import cssClasses from "../cssClasses";
import back_img from '../../images/register_card.jpg';
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const styles = makeStyles(theme => ({
    card: {
        marginTop: '10%'
    },
    cardBack: {
        background: `url(${back_img}) no-repeat center`,
        backgroundSize: 'cover',
    }
}))

const Register = () => {

    const userService = useContext(UserContext);
    const [imgpath, setImgPath] = useState("");
    const [avatar, setAvatar] = useState("");
    const baseClasses = cssClasses();
    const classes = styles();
    const history = useHistory();

    const registerForm = {
        fullname: '',
        email: '',
        password: '',
        age: '',
        created: new Date(),
        isadmin: false,
        avatar: ''
    };

    const onFormSubmit = (value, { setSubmitting }) => {
        console.log(value);
        setSubmitting = true;
        value['avatar'] = avatar;
        userService.addUser(value)
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'You have Successfully Logged in'
                })
                history.push("/main/login");
            });

    }

    const showAvatar = () => {
        if (imgpath) {
            return (
                <img src={imgpath} className="img-fluid" />
            )
        }
    }

    const uploadImage = (event) => {
        const data = new FormData();
        data.append("image", event.target.files[0]);
        setAvatar(event.target.files[0].name);
        userService.uploadImage(data).then((res) => console.log(res));

        var mimeType = event.target.files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }

        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (_event) => {
            setImgPath(reader.result);
        };
    };

    return (
        <div className="col-md-8 mx-auto">

            <Card className={clsx(baseClasses.card, classes.card)}>
                <div className="row">
                    <div className="col-md-6">
                        <CardContent className={baseClasses.cardContent}>
                            <Formik
                                initialValues={registerForm}
                                onSubmit={onFormSubmit}
                            >
                                {({
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting
                                }) => (
                                    <form onSubmit={handleSubmit}>

                                        <h3 className="text-center">Register Here</h3>

                                        <TextField label="Full Name" variant="filled" name="fullname" className={baseClasses.input} onChange={handleChange} value={values.fullname} />
                                        <TextField label="Email" variant="filled" name="email" className={baseClasses.input} onChange={handleChange} value={values.email} />
                                        <TextField label="Password" variant="filled" type="password" name="password" className={baseClasses.input} onChange={handleChange} value={values.password} />

                                        {showAvatar()}
                                        <input
                                            className="form-control mt-5"
                                            type="file"
                                            onChange={uploadImage}
                                        />

                                        <div className="text-center">
                                            <button className="btn btn-warning mt-5 w-100" disabled={isSubmitting}>Submit</button>
                                        </div>

                                        <p className="mt-3 text-center">Already Registered? <Link to="/main/login">Login Here</Link></p>

                                    </form>
                                )}
                            </Formik>

                        </CardContent>
                    </div>
                    <div className={`col-md-6 ${classes.cardBack}`}>

                    </div>
                </div>
            </Card>
        </div>
    )

}

export default Register;