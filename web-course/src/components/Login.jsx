import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../contexts/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const { googleSignIn,githubSignIn, login } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handelGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setError("");
        navigate(from,{replace: true});
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  const handelGithubSignIn = () =>{
    githubSignIn(gitHubProvider)
    .then(res => {
      const user = res.user;
      setError("");
      navigate(from,{replace: true});
      // console.log(user)
    })
    .catch(err => console.error(err))

  }
  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((res) => {
        // const user = res.user;
        // console.log(user);
        form.reset();
        navigate(from, {replace: true});
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
      });
  };

  return (
    <div>
      <Form onSubmit={handleLogIn} className='w-lg-50 mx-auto'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
       <p><Form.Text className="text-danger fs-5">{error}</Form.Text></p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="mt-3">
        <ButtonGroup vertical>
          <Button
            onClick={handelGoogleSignIn}
            className="mb-3"
            variant="outline-primary"
          >
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button onClick={handelGithubSignIn} className='mb-3' variant="outline-primary"><FaGithub></FaGithub> Login with Github</Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
