import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import NotFound from "../pages/Notfound/NotFound";
import Contact from "../pages/Contact/Contact";

const routes = [
    { path: "*", element: <NotFound /> },
    { path: "/", element: <Home /> },
    { path: "/Home", element: <Home /> },
    { path: "/contact", element: <Contact /> },
    { path: "/About", element: <About /> }
]

export default routes;