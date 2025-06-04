import { useEffect } from 'react';
import CallToAction from '../CallToAction';
import Footer from '../Footer';
import Header from '../Header';
import Resume from '../Resume';

function ResumeLayout() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Resume />
      <Footer />
      <CallToAction />
    </>
  );
}

export default ResumeLayout;
