import AboutMe from '../AboutMe';
import CallToAction from '../CallToAction';
import ContactMe from '../ContactMe';
import Experience from '../Experience';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';

import { Helmet } from 'react-helmet';
import { dataInfo } from '../../info';

function MainLayout() {
  const { name, secondName, position } = dataInfo.first;

  return (
    <>
      <Helmet>
        <title>{`${name} ${secondName} | ${position}`}</title>
        <meta name="description" content={dataInfo.summary.description} />
        <meta
          property="og:title"
          content={`${name} ${secondName} | ${position}`}
        />
        <meta
          property="og:description"
          content={dataInfo.summary.description}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content={`${name} ${secondName} | ${position}`}
        />
        <meta
          name="twitter:description"
          content={dataInfo.summary.description}
        />
      </Helmet>
      <Header />
      <Home />
      <Experience />
      <AboutMe />
      <ContactMe />
      <Footer />
      <CallToAction />
    </>
  );
}

export default MainLayout;
