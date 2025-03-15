import { Outlet, BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Certificate from './pages/certificate';
import ContactUs from './pages/contact-us';
import PlainLayout from './components/Layout/plain-layout';
import Thaikalam from './pages/thaikalam';
import Event from './pages/event';
import OurClasses from './pages/our-classes';
import Shop from './pages/shop';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <PlainLayout>
          <Outlet />
        </PlainLayout>
      ),
      children: [
        { path: '', index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        {
          path: 'certificate',
          element: <Certificate />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'events',
          element: <Event />,
        },
        {
          path: 'our-classes',
          element: <OurClasses />,
        },
        {
          path: 'thaikalam',
          element: <Thaikalam />,
        },
        {
          path: 'contact-us',
          element: <ContactUs />,
        },
      ],
    },
    {
      path: '*',
      element: <Home />,
    },
  ]);

  return routes;
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
