import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { Works } from '@/pages/Works';
import { Layout } from '@/shared/ui/layout';
import './index.scss';

export const App = () => {
  return (
    <Layout>
      <Home />
      <About />
      <Services />
      <Works />
      <Contact />
    </Layout>
  );
};
