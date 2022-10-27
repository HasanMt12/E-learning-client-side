import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const FAQ = () => {
    return (
        <div>
            <h1>Frequently Asked Questions About Training Sage</h1>
           <div className='m-5'>
            <Accordion>
            
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                      < p className='text-info fw-bold  '>Payments on Training Sage</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-dark fw-bold">
                        Log into your Training Sage account

Open the home page for the course or Specialization you want to see the prices for< p></ p>

Click Enroll

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       < p className='text-info fw-bold  '>Solve problems with Training Sage</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-dark fw-bold">
                       If you 're having problems connecting to Training Sage, first:
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        < p className='text-info fw-bold  '>Download videos</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-dark fw-bold">
                        If you want to watch videos without an internet connection, you can download the video files.You can also download the video 's subtitles as a transcript file you can read.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                       < p className='text-info fw-bold  '>Course Certificates</ p>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-dark fw-bold">
                        A Course Certificate is an official Training Sage credential that confirms that you successfully completed a course on Training Sage.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div> 
        </div>
    );
};

export default FAQ;