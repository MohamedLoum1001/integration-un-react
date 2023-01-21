
import './App.css';
import './Media.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Service from './Components/Service';
import Testimonials from './Components/Testimonials';
import Gallerie from './Components/Gallerie';
import Footer from './Components/Footer';

 
function App() {
  return (
    <div className="App">
     <NavBar/>
      <Banner/>
      <Service/>
      <Testimonials/>
      <Gallerie/>
      <Footer/>
    </div>
  );
}

export default App;
