import {createBrowserRouter} from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import CorporatePartnership from '../pages/CorporatePartnership';
import Contact from '../pages/Contact';

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
                    path:'contact',
                    element: <Contact />
                },
            ]
        }
    ]
)

export default routes