import { Home } from '@/pages/Home';
import { Container } from '@/shared/ui/container';
import { Layout } from '@/shared/ui/layout';
import './index.scss';

export const App = () => {
  return (
    <Layout>
      <Container>
        <Home />
      </Container>
    </Layout>
  );
};
