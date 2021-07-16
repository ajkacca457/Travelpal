import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Services from './pages/Services';
import Singleroom from './pages/Singleroom';
import Singleservice from './pages/Singleservice';
import Hotroom from './pages/Hotroom';
import Error from './pages/Error';
import Navigation from './componets/Nav';
import Footer from './componets/Footer';
import { Router} from "@reach/router";
import RoomsContextProvider from './context/RoomsContext';
import ServicesContextProvider from './context/ServicesContext';

function App() {
  return (
    <div className="App">
      <ServicesContextProvider>
      <RoomsContextProvider>
      <Navigation></Navigation>
      <Router>
      <Home path="/" />
      <Rooms path="/rooms"/>
      <Services path="/services"/>
      <Singleroom path="/rooms/:roomid"/>
      <Hotroom path="/hotrooms/:hotroomid"/>
      <Singleservice path="/services/:serviceid" />
      <Error path="/error"/>
      </Router>
      </RoomsContextProvider>
      </ServicesContextProvider>

      <Footer></Footer>
   
    </div>
  );
}

export default App;
