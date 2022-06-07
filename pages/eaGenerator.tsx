import { NextPage } from 'next';
import Layout from '../components/layout/layout';
import EaTemplateTool from '../components/eaGenerator/eaTemplateTool';

const EaGenerator: NextPage = () => {
  return (
    <Layout>
      <div className="container">
        <EaTemplateTool />
      </div>
    </Layout>
  );
};

export default EaGenerator;
