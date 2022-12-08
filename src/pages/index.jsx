import { Route, Routes } from 'react-router-dom';
import { routes } from '@/shared/config/routes';
import { Home } from './Home';

export const Routing = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path='*' element={<Home />} />
    </Routes>
  );
};
