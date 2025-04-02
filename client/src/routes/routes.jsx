import {createBrowserRouter} from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import CorporatePartnership from '../pages/CorporatePartnership';
import Contact from '../pages/Contact';
import UniversityCatalog from '../pages/UniversityCatalog';
import CourseCatalog from '../pages/CourseCatalog';
import University from '../pages/University';
import ExploreUniversities from '../pages/ExploreUniversities';

const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children:[
                {
                    path:'/',
                    element: <Home />
                },
                {
                    path:'about',
                    element: <About />
                },
                {
                    path:'CorporatePartnership',
                    element: <CorporatePartnership />
                },
                {
                    path:'university/:id',
                    element: <University />
                },
                {
                    path:'contact',
                    element: <Contact />
                },
               {
                path: '/explore-universities',
                element:<ExploreUniversities />,
                children:[
                    {
                        path:'university-catalog',
                        element: <UniversityCatalog />
                    },
                    {
                        path:'course-catalog',
                        element: <CourseCatalog />
                    },
                ]
               }
            ]
        }
    ]
)

export default routes