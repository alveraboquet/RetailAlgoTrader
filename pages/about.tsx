import Layout from '../components/layout/layout';
import Image from 'next/image';

const About = () => {
  return (
    <Layout>
      <article className="container fs-5">
        <h1 className="mt-3 fw-bold text-dark text-center">
          About RetailAlgoTrading
        </h1>
        <section className="row d-flex align-items-center text-center">
          <div className="col-md-6">
            <h2 className="mt-3 fw-bold text-dark">
              Why was RetailAlgoTrading created?
            </h2>
            <p>
              Just over the past decade trading the markets has become widely
              available to the public.
            </p>
            <p>
              This combined with the fact that programming is seen as a
              difficult to learn skill means there is very little quality
              information on algorithmic trading for retail traders.
            </p>
            <p>
              Here at RetailAlgoTrader we had to stumble our way through
              out-of-date articles and documentation to learn the basics of
              algorithmic trading.
            </p>
            <p>
              Piecing together different guides and forums was extremely
              inefficient. And a majority of the information out there was
              highly academic and theoretical.
            </p>
            <p>It would never work when applied to real markets.</p>
          </div>
          <div className="col-md-6">
            <figure>
              <Image
                src="/images/website/algorithmicTrading.webp"
                className="rounded"
                height={1280}
                width={1920}
                alt="Screen with Algorithmic Trading Code"
              />
            </figure>
          </div>
        </section>
        <section className="row d-flex align-items-center text-center">
          <div className="d-none d-md-block col-md-6">
            <figure>
              <Image
                src="/images/website/genericStock2.webp"
                className="rounded"
                height={1414}
                width={2121}
                alt="Stock line chart overlaid with numbers"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold text-dark">
              What is RetailAlgoTrading&apos;s Solution?
            </h2>
            <p>
              Through much trial and error we were able to get a hang of trading
              and algorithms; however, we were frustrated at how much time and
              energy had been wasted.
            </p>
            <p>
              RetailAlgoTrading has been created as a comprehensive resource for
              both trading and the creation of trading algorithms.
            </p>
            <p>
              There is a focus on real-life applicable knowledge and skills
              aimed at retail traders.
            </p>
          </div>
          <div className="d-md-none col-md-6">
            <figure>
              <Image
                src="/images/website/genericStock2.webp"
                className="rounded"
                height={1414}
                width={2121}
                alt="Stock line chart overlaid with numbers"
              />
            </figure>
          </div>
        </section>
        <section className="row">
          <h2 className="fw-bold text-dark">Our Mission</h2>
          <p>
            We aim to be your go-to partner for anything related to trading. We
            plan to do this by providing quality and efficient resources for a
            variety of markets and programs.
          </p>
          <p>
            We will generate value for our clients by providing significant time
            savings and increased knowledge.
          </p>
        </section>
        <section className="row">
          <h2 className="fw-bold text-dark">Our Values</h2>
          <p>
            We have three primary values our business is built around in order
            of importance:
          </p>
          <p>1. Inform about Risks and Rewards</p>
          <p>2. Sustain Client Capital</p>
          <p>3. Generate Client Profitability</p>
        </section>
        <section className="row">
          <h2 className="fw-bold text-dark">Our Long-Term Goals</h2>
          <h3 className="fw-bold text-dark">Increase Content</h3>
          <p>
            As we have just recently launched, our primary focus is increasing
            the volume and variety of content available for our clients.
          </p>
          <p>
            Particularly content focused on stocks, futures, and python
            algorithms.
          </p>
          <h3 className="fw-bold text-dark">Collect User Feedback</h3>
          <p>
            We prioritize receiving quality feedback from our clients. At this
            early stage there will undoubtedly be issues and gaps in the
            resources.
          </p>
          <p>
            We need to know about these issues so that we can provide users the
            most productive experience possible.
          </p>
          <h3 className="fw-bold text-dark">Establish Partnerships</h3>
          <p>
            While we grow and expand, we would like to connect with new and
            existing organizations in the trading ecosystem. This ranges from
            small content creators to large brokerages.
          </p>
          <p>
            This will ensure we can always provide accurate and up-to-date
            resources to our users.
          </p>
        </section>
      </article>
    </Layout>
  );
};

export default About;
