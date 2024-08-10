import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import "../../componentstyles/HomeComponentStyles/Faqs.css";

export default function Faqs() {
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const contactPhone = import.meta.env.VITE_CONTACT_PHONE;

  const AccordionTrigger = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames("AccordionTrigger", className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <PlusIcon className="AccordionPlusIcon" aria-hidden />
          <MinusIcon className="AccordionMinusIcon" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  );

  const AccordionContent = React.forwardRef(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames("AccordionContent", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  );
  return (
    <div className="faqs-section">
      <div className="faqs-section-header">
        <h2>FAQs</h2>
      </div>

      <div className="faqs-section-paragraph-hook">
        <p>
          Below are some of the questions I get asked most of the time. If you
          are having any trouble, feel free to<span> </span>
          <span className="call-text">
            <a href={contactPhone} title="Call Ivan the Dev">give me a call</a>
          </span>
          ,<span> </span>
          <span className="quote-text">
            <a href="#homecontactform">ask for a quote</a>
          </span>{" "}
          or
          <span className="email-text">
            <a href={`mailto:${contactEmail}`} title="Email Ivan the Dev"> shoot me a email</a>
          </span>
          .
        </p>
      </div>

      <div className="faqs-accordion">
        <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger>
              What technologies do you specialize in?
            </AccordionTrigger>
            <AccordionContent>
              I am a full stack web and app developer specializing in MERN stack
              for web development and React Native + Firebase for mobile.
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger>
              Can you describe your development process?
            </AccordionTrigger>
            <AccordionContent>
              My development process typically involves requirement gathering,
              planning, designing, coding, testing, and deployment, with ongoing
              communication and agile methodologies at each stage
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger>
              How do you ensure the security of the applications you develop?
            </AccordionTrigger>
            <Accordion.Content className="AccordionContent">
              <div className="AccordionContentText">
                I implement security best practices such as using HTTPS, data
                encryption, secure authentication, regular dependency updates,
                and conducting security audits to protect against
                vulnerabilities
              </div>
            </Accordion.Content>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-4">
            <AccordionTrigger>
              What is your experience with responsive design?
            </AccordionTrigger>
            <AccordionContent>
              have extensive experience creating responsive web designs using
              CSS frameworks like Bootstrap and Tailwind, ensuring compatibility
              across various devices and screen sizes
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-5">
            <AccordionTrigger>
              How do you handle version control and collaboration in projects?
            </AccordionTrigger>
            <AccordionContent>
              I use Git for version control, allowing for efficient
              collaboration with other developers. I’m familiar with GitHub and
              use it for managing repositories and facilitating code reviews
            </AccordionContent>
          </Accordion.Item>

          <Accordion.Item className="AccordionItem" value="item-6">
            <AccordionTrigger>
              What is your approach to testing and quality assurance?
            </AccordionTrigger>
            <AccordionContent>
              I follow Test-Driven Development (TDD) practices and use automated
              testing tools like Jest for unit tests, Selenium for integration
              tests, and Cypress for end-to-end tests to ensure high-quality
              software.
            </AccordionContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
  );
}
