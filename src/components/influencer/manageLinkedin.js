import { Card, CardContent, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import {
    LinkedinProfile,
} from 'react-social-plugins';
import app_config from "../../config";
import { Formik } from "formik";
import Swal from "sweetalert2";

const ManageLinkedin = props => {

    const [postList, setPostList] = useState([]);
    const [link, setLink] = useState("");
    const [profile, setProfile] = useState(JSON.parse(sessionStorage.getItem('profile')));
    const url = app_config.api_url;

    const addPost = () => {
        setPostList([...postList, link]);
        console.log(postList);
    }

    const displayUrl = () => {
        if (url) {
            return (
                <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="mohdmubassir16" data-version="v1"></div>
            )
        } else {
            return (
                <div>


                </div>
            )
        }
    }

    const linkedinForm = {
        title: '',
        profileUrl: '',
        avatar: '',
        posts: []
    }

    const onFormSubmit = (value) => {
        value.posts = postList;
        console.log(value);

        const opt = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ platform: 'linkedin', data: value })
        }

        fetch(url + '/social/add', opt)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                fetch(url + '/profile/pushupdate/' + profile._id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ socialProfiles: data._id }) })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire({
                            title: 'Success',
                            icon: 'success',
                            text: 'Linkedin Profile Successfully Added!'
                        })
                    });
            });
    }

    return (
        <div className="col-md-10 mx-auto" style={{ marginTop: '5rem' }}>
            <Card>
                <CardContent>

                    <Formik
                        initialValues={linkedinForm}
                        onSubmit={onFormSubmit}
                    >
                        {({
                            values,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-center">Manage Linkedin Profile</h3>

                                <TextField className="w-100 mt-5" label="Linkedin Profile Url" variant="filled" name="profileUrl" onChange={handleChange} />
                                <TextField className="w-100 mt-5" label="Avatar" variant="filled" name="avatar" onChange={handleChange} />

                                <div className="">
                                    <button className="btn btn-primary mt-5 w-100">Submit</button>
                                </div>

                            </form>

                        )}
                    </Formik>

                    <div className="row mt-5">
                        {postList.map((link, index) => {
                            return (
                                <div key={index} className="col-md-6">
                                    <iframe src={link} height="500" width="100%" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
                                </div>
                            )
                        })}
                    </div>


                    <TextField className="w-100 mt-5" label="Linkedin Post" variant="filled" value={link} onChange={e => setLink(e.target.value)} />

                    <button className="mt-5 btn btn-primary" onClick={addPost}>Add Post</button>

                </CardContent>
            </Card>
        </div>
    )
}

export default ManageLinkedin;