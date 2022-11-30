import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
    const [error, setError] = useState("");
    const {googleSignIn,githubSignIn,createUser,updateUserProfile} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelGoogleSignIn = () =>{
        googleSignIn(googleProvider)
        .then(res => {
            const user = res.user;
            // console.log(user);
            setError("")
            navigate(from,{replace: true});
        })
        .catch(err => console.error(err))

    }

    const handelGithubSignIn = () =>{
      githubSignIn(gitHubProvider)
      .then(res => {
        const user = res.user;
        // console.log(user)
        setError("")
        navigate(from,{replace: true});
      })
      .catch(err => console.error(err))

    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
      // console.log(name,email,photoURL,password)
        createUser(email,password)
        .then(res =>{
            // const user = res.user;
            // console.log(user);
            form.reset();
            setError('')
            navigate('/')
            handleUpdateProfile(name,photoURL)
            navigate(from,{replace: true});
        
        })
        .catch(err => {
            console.error(err)
            setError(err.message)
        })


    }
    const handleUpdateProfile = (name,photoURL) =>{
      const profile={
        displayName:name,
        photoURL:photoURL
      }
      updateUserProfile(profile)
      .then(() =>{ })
      .catch(err => console.error(err))
    }
    
  return (
    <div>

     <div>
     <Form onSubmit={handleSubmit} className="text-start">
        <Form.Group className="mb-3 " controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photoURL" type="text" placeholder="Enter photoURL" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Enter password" required />
        </Form.Group>
        <p><Form.Text className="text-danger fs-5">{error}</Form.Text></p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     </div>

      <div className="mt-3">
      <ButtonGroup vertical>
      <Button onClick={handelGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
      <Button onClick={handelGithubSignIn} className='mb-3' variant="outline-primary"><FaGithub></FaGithub> Login with Github</Button>
      </ButtonGroup>
      </div>
    </div>
  );
};

export default Register;
