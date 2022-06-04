const PricingText = () => {
  return (
    <div>
      <section className="text-center p-3">
        <h2>Learn how to properly trade</h2>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <p>Develop a trading plan</p>
          </div>
          <div className="col-4">
            <p>Setup backtesting framework</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <p>Optimize strategies</p>
          </div>
          <div className="col-4">
            <p>Create trading portfolio</p>
          </div>
        </div>
      </section>
      <section className="bg-light p-3 text-center">
        <h2>Discover how to master the following skills</h2>
        <div className="row">
          <div className="col-4">
            <p>Equities</p>
          </div>
          <div className="col-4">
            <p>Forex</p>
          </div>
          <div className="col-4">
            <p>Futures</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>TradingView</p>
          </div>
          <div className="col-4">
            <p>MT4</p>
          </div>
          <div className="col-4">
            <p>QuantConnect</p>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <p>Python</p>
          </div>
          <div className="col-4">
            <p>Jupyter Notebooks</p>
          </div>
          <div className="col-4">
            <p>Crypto</p>
          </div>
        </div>
      </section>
      <section className="text-center p-3">
        <h2>Frequently Asked Questions</h2>
        <div className="row">
          <div className="col-6 p-3">
            <h3>How do Hobby and Pro differ?</h3>
            <p>
              Pro includes everything in the Hobby subscription plus all of our
              advanced resources and courses. Pro gives you access to advanced
              guides for specific topics, pro courses, trading academies, and
              our custom template generator. These tools will provide all of the
              resources and knowledge needed to efficiently develop your own
              profitable trading system.
            </p>
            <h3>Is upgrading to Pro worth it?</h3>
            <p>
              The Pro resources have been designed based on the countless hours
              and lessons that our team has undergone in trading. Our resources
              provide all of the required knowledge and skills in one location.
              You will reach profitable trading much more quickly than
              attempting to learn everything on your own. Our resources focus on
              practical skills rather than theoretical knowledge that is seen in
              most resources.
            </p>
            <h3>Can I cancel my subscription?</h3>
            <p>
              You can cancel your Pro subscription anytime through the
              &quot;Account Settings&quot; page.
            </p>
          </div>
          <div className="col-6 p-3">
            <h3>Is it required that I already know how to program?</h3>
            <p>
              Absolutely not. Many of our users have minimal coding experience
              when they join.
            </p>
            <h3>What are academies?</h3>
            <p>
              Academies are a comprehensive framework for essential trading
              skills. They contain everything needed to get started with their
              respective topics.
            </p>
            <h3>What is the template generator?</h3>
            <p>
              The majority of code in trading algorithms is &quot;boilerplate
              code&quot;. Your specific strategy will only be a small percentage
              of the total code. Our templates allow you to select entry rules,
              exit rules, risk management rules, etc for your respective
              platform. This will ensure that you do not miss any important
              functions and save you valuable time and energy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingText;
