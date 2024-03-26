import Navbar from './components/Header/Navbar';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router';

// import Faq from './components/FAQ/Faq';
// import Home from './components/Home/HomePage'
// import Home from './views/home/home';

function App() {

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
      {/* <Home /> */}
      {/* <BgVideoPlayCard /> */}
      {/* <ScrollingCards /> */}
      {/* <Cards/> */}
      {/* <MainBody /> */}
      {/* <CaseStudy />
      <Directors />
      <Client />
      <Testimonial />
      <Faq/>
      <Footer /> */}
    </>
  )
}

export default App




/*import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import AOS from 'aos';
// import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
// import Home from './components/Home/Home'
import Navbar from './components/Header/Navbar';
import routes from './Routes/routes'
import ScrollToTop from './ScrollToTop/ScrollToTop'
// import Home from '././views/Home';
function App() {
  // Animation global setting 
  // AOS.init({
  //   // Global settings:
  //   disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  //   initClassName: 'aos-init', // class applied after initialization
  //   animatedClassName: 'aos-animate', // class applied on animation
  //   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  //   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  //   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  //   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  //   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  //   offset: 70, // offset (in px) from the original trigger point
  //   delay: 0, // values from 0 to 3000, with step 50ms
  //   duration: 800, // values from 0 to 3000, with step 50ms
  //   easing: 'ease', // default easing for AOS animations
  //   once: false, // whether animation should happen only once - while scrolling down
  //   mirror: false, // whether elements should animate out while scrolling past them
  //   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

  // });
  return (
    <>
      <Navbar />
      <Router>
        <ScrollToTop>
          <div>
          <Navbar />

            <Routes>
              {
                routes.map(x => (
                  <Route key={x.to} path={x.to} element={x.components} exact />
                ))
              }
            </Routes>
          </div>
        </ScrollToTop>
      </Router>
    </>

  );
}

export default App
*/
