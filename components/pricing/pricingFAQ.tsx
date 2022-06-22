const PricingFAQ = () => {
  return (
    <section className="m-3">
      <h2 className="text-center mb-3">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              How do Hobby and Pro differ?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              Pro includes everything in the Hobby subscription plus all of our
              advanced resources and courses. Pro gives you access to advanced
              guides for specific topics, pro courses, trading academies, and
              our custom template generator. These tools will provide all of the
              resources and knowledge needed to efficiently develop your own
              profitable trading system.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Is it required that I already know how to program?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              Absolutely not. Many of our users have minimal coding experience
              when they join.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Is upgrading to Pro worth it?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              The Pro resources have been designed based on the countless hours
              and lessons that our team has undergone in trading. Our resources
              provide all of the required knowledge and skills in one location.
              You will reach profitable trading much more quickly than
              attempting to learn everything on your own. Our resources focus on
              practical skills rather than theoretical knowledge that is seen in
              most resources.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What are academies?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              Academies are a comprehensive framework for essential trading
              skills. They contain everything needed to get started with their
              respective topics.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              What is the template generator?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              The majority of code in trading algorithms is &quot;boilerplate
              code&quot;. Your specific strategy will only be a small percentage
              of the total code. Our templates allow you to select entry rules,
              exit rules, risk management rules, etc for your respective
              platform. This will ensure that you do not miss any important
              functions and save you valuable time and energy.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Can I cancel my subscription?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#faqAccordion"
          >
            <div className="accordion-body bg-light">
              You can cancel your Pro subscription anytime through the
              &quot;Account Settings&quot; page.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
