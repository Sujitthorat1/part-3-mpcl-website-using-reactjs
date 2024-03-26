import About from "../components/About/About";
import Career from "../components/Career/Career";
import ContactUs from "../components/ContactUs/ContactUs";
import Home from "../components/Home/HomePage";

const routes = [
    {
        components: <Home />,
        to: '/',
    },
    {
        components: <Career />,
        to: '/career',
    },
    {
        components: <ContactUs />,
        to: '/contactUs',
    },

    // {
    //     components: <Home />,
    //     to: '/',
    // }, {
    //     components: <Home />,
    //     to: '/',
    // }, {
    //     components: <Home />,
    //     to: '/',
    // },
];


export default routes;