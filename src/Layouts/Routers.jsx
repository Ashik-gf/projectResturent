
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import HomeLayOuts from './HomeLayOuts';
import Menu from '../pages/Menu/Menu';
import OurSafe from '../pages/OurSafe/OurSafe';
import SingleChefs from '../Components/SingleChefs/SingleChefs';
import { mainBlog, team2 } from '../Constant';
import Gallary from '../pages/Gallary/Gallary';
import GallarySingle from '../Components/GallarySingle/GallarySingle';
import Regarvation from '../pages/Regarvation/Regarvation';
import Blog from '../pages/Blog/Blog';
import SingleBlog from '../Components/SingleBlog/SingleBlog';
import Contact from '../pages/Contact/Contact';


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
        {
          path: '/singleChefs/:userId',
          loader: async ({ params }) => {
            const chefData = team2.find(chef => chef.id === parseInt(params.userId));
            if (!chefData) {
              throw new Error('Chef not found');
            }
            return chefData;
          },
          element: <SingleChefs />
        },
        {
          path: '/gallarySingle/:userId',
          loader: async ({ params }) => {
            const chefData = team2.find(chef => chef.id === parseInt(params.userId));
            if (!chefData) {
              throw new Error('Chef not found');
            }
            return chefData;
          },
          element: <GallarySingle />
        },
        {
          path:'/gallary',
          element:<Gallary />

        },
        {
          path:'/regarvTable',
          element:<Regarvation />
        },
        {
          path:'/blog',
          element:<Blog />
        },
        {
          path:'/singleBlog/:blogId',
          loader: async ({params})=>{
            const mainBlogs = mainBlog.find(blog=> blog.id === parseInt(params.blogId));
            if (!mainBlogs){
              throw new Error('Blog Not found')
            }
            return mainBlogs
          },
          element:<SingleBlog />
        },
        {
          path:'/contact',
          element:<Contact />
        }
      ]
    },
  ]);

export default router