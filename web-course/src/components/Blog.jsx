import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <div>
      <Accordion className="text-start" defaultActiveKey={["0"]}>
        <Accordion.Item eventKey="0"  alwaysOpen>
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to your app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. <br />
            1. On this page <br />
            2. Add and initialize the Authentication SDK.
            <br />
            3. (Optional) Prototype and test with Firebase Local Emulator Suite.{" "}
            <br />
            4. Sign up new users
            <br />
            5. Sign in existing users.
            <br />
            6. Set an authentication state observer and get user data.
            <br />
            7. Next steps.
            <br />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header> How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            What is Node? How does Node work?
          </Accordion.Header>
          <Accordion.Body>
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
