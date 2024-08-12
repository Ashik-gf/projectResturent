
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import HomeLayOuts from './HomeLayOuts';
import Menu from '../pages/Menu/Menu';
import OurSafe from '../pages/OurSafe/OurSafe';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayOuts />,
      children:[
        {
        path:'/',
        element:<Home />
        },
        {
        path:'/aboutUs',
        element:<About />
        },
        {
        path:'/menu',
        element:<Menu />
        },
        {
        path:'/regarvation',
        element:<OurSafe />
        },
      ]
    },
  ]);

export default router