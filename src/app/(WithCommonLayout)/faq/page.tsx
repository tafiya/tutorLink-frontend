"use client";
import React, { useState } from "react";

const Accordion: React.FC = () => {
  return (
    <div className=" ">
    <section className="relative overflow-hidden max-w-7xl mx-auto pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-orange-500  ">
                FAQ
              </span>
              <h2 className="text-3xl font-bold text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2 ">
            <AccordionItem 
              header="How do I find a tutor?"
              text="You can browse our list of expert tutors by subject, grade level, or availability. Use filters to refine your search based on hourly rate, ratings, and location. Once you find a suitable tutor, you can send a hire request."
            />
            <AccordionItem
              header="How are payments processed?"
              text="Payments are securely processed through SSLCommerz, Stripe, or PayPal. Once a tutor accepts your request, you can proceed with the payment. 
              Your funds are securely held until the session is completed"
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What happens if a tutor rejects my request?"
              text="If a tutor declines your request, you can either send a modified request (if allowed) or browse and hire another tutor that matches your requirements."
            />
            <AccordionItem
              header="How do I create a tutor profile?"
              text="If you want to become a tutor, sign up as a tutor and complete your profile by adding subjects, availability, an hourly rate, 
              and a brief bio. Your profile may be reviewed before being listed."
            />
            <AccordionItem
              header="Can I get a refund if I cancel a session?"
              text="Refund policies depend on the tutor’s cancellation policy. Some tutors offer full or partial refunds if you cancel within a certain timeframe. 
              You can check the tutor’s profile for specific details."
            />
          </div>
        </div>
      </div>
    </section>
    </div>

  );
};

export default Accordion;

interface AccordionItemProps {
  header: string;
  text: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState<boolean>(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
