import { Routing } from '@/pages';
import { Layout } from '@/shared/ui/layout';
import './index.scss';

export const App = () => {
  return (
    <>
      <Layout>
        <Routing />
      </Layout>
    </>
  );
};
