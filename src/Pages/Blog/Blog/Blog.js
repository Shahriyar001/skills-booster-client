import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>This is Blog section</h2>
            <div className='m-3 p-2'>
                <div className='mb-1'>
                    <h4> What is cors?</h4>
                </div>
                <div>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
            </div>
            <div className='m-3 p-2'>
                <div className='mb-1'>
                    <h4>Why are you using firebase?</h4>
                </div>
                <div>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.

                        The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.

                        The Realtime Database is a NoSQL database and as such has different optimizations and functionality compared to a relational database. The Realtime Database API is designed to only allow operations that can be executed quickly. This enables you to build a great realtime experience that can serve millions of users without compromising on responsiveness. Because of this, it is important to think about how users need to access your data and then structure it accordingly.</p>
                </div>
            </div>
            <div className='m-3 p-2'>
                <div className='mb-1'>
                    <h4>How do the private route work?</h4>
                </div>
                <div>
                    <p>Public routes are Log in, SignUp, Forgot Password, Reset Password. In simple words, These routes can be accessed before login into the App.

                        Private Routes
                        Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.

                        The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.

                        In this article, we can see. How to create public and private routes using react-router for your react apps. Let's start</p>
                </div>
            </div>
            <div className='m-3 p-2'>
                <div className='mb-1'>
                    <h4> What is node? How does Node Work?</h4>
                </div>
                <div>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request..</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;