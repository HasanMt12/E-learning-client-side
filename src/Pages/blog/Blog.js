import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import blog from "../../assets/bolg.json";
import Lottie from "lottie-react";


import 'react-accessible-accordion/dist/fancy-example.css';

const Blog = () => {
    return (


        <div className='m-5'>
            <div className='w-50 lottie'> <Lottie animationData={blog} loop={true}/></div >
            <Accordion>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                     < p className='text-info fw-bold '>What is Cors ?</ p>  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

Cross-origin resource sharing (CORS) allows AJAX requests to skip the Same-origin policy and access resources from remote hosts.

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      < p className='text-info fw-bold '> Why are you using firebase ?</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                       Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.

Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.

Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      < p className='text-info fw-semibold '>How does the private route work ?</ p>  
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The private route component is used to protect selected pages in a React app from unauthenticated users.

                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated(Logged in ).

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      < p className='text-info fw-bold '> What is Node ? How does Node work ?</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Node.js is an open - source, cross - platform JavaScript runtime environment and library
                        for running web applications outside.Developers use Node.js to create server - side web applications, and it is perfect
                        for data - intensive applications since it uses an asynchronous, event - driven model.

                        Node.js accepts the request from the clients and sends the response,
                            while working with the request node.js handles them with a single thread.To operate I / O operations or requests node.js use the concept of threads.Thread is a sequence of instructions that the server needs to perform.It runs parallel on the server to provide the information to multiple clients.Node.js is an event loop single - threaded language.It can handle concurrent requests with a single thread without blocking it
                        for one request.

                        Node.js basically works on two concept:
                            Asynchronous
                        Non - blocking I / O
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        
    );
};

export default Blog;