import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Works } from '@/pages/Works';
import { Contact } from '@/pages/Contact';

export const routes = [
  {
    id: 0,
    element: <Home />,
    path: '/',
  },
  {
    id: 1,
    element: <About />,
    path: '/about',
  },
  {
    id: 2,
    element: <Services />,
    path: '/services',
  },
  {
    id: 3,
    element: <Works />,
    path: '/works',
  },
  {
    id: 4,
    element: <Contact />,
    path: '/contact',
  },
];
