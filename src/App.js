import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Menu from './pages/Menu';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Chauffeur from './pages/services/Chauffeur';
import MeetGreet from './pages/services/MeetGreet';
import VIPTerminal from './pages/services/VIPTerminal';
import AvaialbleCars from './pages/fleetCars/AvaialbleCars';
import CarModels from './pages/fleetCars/CarModels';
import ComponayHistory from './pages/about/ComponayHistory';
import Values from './pages/about/Values';
import Terms from './pages/about/Terms';
import ContactForm from './pages/contact/ContactForm';
import ProfileManagement from './pages/profile/ProfileManagement';
import BookingHistory from './pages/profile/BookingHistory';
import PaymentMethods from './pages/profile/PaymentMethods';
import Support from './pages/contact/Support';


function App() {

  return (
    <div className="App">
      <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*-------------------Services------------------- */}
          <Route path="/chauffeur" element={<Chauffeur />} />
          <Route path="/meetgreet" element={<MeetGreet />} />
          <Route path="/vip" element={<VIPTerminal />} />

          {/*-------------------Cars------------------- */}
          <Route path="/availablecars" element={<AvaialbleCars />} />
          <Route path="/carmodels" element={<CarModels />} />

          {/*-------------------About Us------------------- */}
          <Route path="/team" element={<Team />} />
          <Route path="/companyhistory" element={<ComponayHistory />} />
          <Route path="/values" element={<Values />} />
          <Route path="/terms" element={<Terms />} />

          {/*-------------------Contact us------------------- */}
          <Route path="/contactform" element={<ContactForm />} />
          <Route path="/support" element={<Support />} />

          {/*-------------------User Account------------------- */}
          <Route path="/profile" element={<ProfileManagement />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/payment" element={<PaymentMethods />} />
  

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
